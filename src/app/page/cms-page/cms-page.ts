import { Component, signal, computed, inject, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { NoticiaService } from '../../service/noticia.service';
import { Noticia } from '../../models/Notica.model';
import { EstadoPublicacion } from '../../enum/EstadoPublicacion';
import { TipoRole } from '../../enum/TipoRole';
import { CATEGORIAS } from '../../data/categorias.data';
import { Categoria } from '../../models/Categoria.model';

type ModoFormulario = 'lista' | 'crear' | 'editar';
type FiltroEstado = 'todas' | EstadoPublicacion;

@Component({
  selector: 'app-cms-page',
  imports: [CommonModule, FormsModule],
  templateUrl: './cms-page.html',
  styleUrl: './cms-page.css',
})
export class CmsPage {
  private authService = inject(AuthService);
  private noticiaService = inject(NoticiaService);
  router = inject(Router);

  // Signals de estado
  noticias = signal<Noticia[]>([]);
  modo = signal<ModoFormulario>('lista');
  filtroEstado = signal<FiltroEstado>('todas');
  noticiaSeleccionada = signal<Noticia | null>(null);
  mostrarConfirmacionEliminar = signal<boolean>(false);
  mensajeError = signal<string>('');
  mensajeExito = signal<string>('');

  // Formulario signals
  formTitulo = signal<string>('');
  formSubtitulo = signal<string>('');
  formContenido = signal<string>('');
  formCategoriaId = signal<string>('');
  formImagenes = signal<string[]>(['']);

  // Categorías disponibles
  categorias: Categoria[] = CATEGORIAS;

  // Enums para template
  EstadoPublicacion = EstadoPublicacion;
  TipoRole = TipoRole;

  // Computed signals
  usuarioActual = computed(() => this.authService.usuarioActual());

  tieneAcceso = computed(() => {
    const usuario = this.usuarioActual();
    return usuario?.rol === TipoRole.REPORTERO || usuario?.rol === TipoRole.EDITOR;
  });

  noticiasFiltradas = computed(() => {
    const filtro = this.filtroEstado();
    const todasNoticias = this.noticias();

    if (filtro === 'todas') {
      return todasNoticias;
    }

    return todasNoticias.filter(n => n.estado === filtro);
  });

  cargando = computed(() => this.noticiaService.cargando());

  // Contadores de noticias por estado
  contadorBorradores = computed(() =>
    this.noticias().filter(n => n.estado === EstadoPublicacion.BORRADOR).length
  );

  contadorPendientes = computed(() =>
    this.noticias().filter(n => n.estado === EstadoPublicacion.PENDIENTE).length
  );

  contadorPublicadas = computed(() =>
    this.noticias().filter(n => n.estado === EstadoPublicacion.PUBLICADO).length
  );

  imagenesValidas = computed(() =>
    this.formImagenes().filter(img => img.trim().length > 0)
  );

  formularioValido = computed(() => {
    return (
      this.formTitulo().trim().length > 0 &&
      this.formSubtitulo().trim().length > 0 &&
      this.formContenido().trim().length >= 50 &&
      this.formCategoriaId().trim().length > 0 &&
      this.imagenesValidas().length > 0
    );
  });

  constructor() {
    // Verificar acceso y cargar noticias al iniciar
    effect(() => {
      const usuario = this.usuarioActual();
      if (usuario) {
        if (this.tieneAcceso()) {
          this.cargarNoticias();
        }
      } else {
        this.router.navigate(['/login']);
      }
    });
  }

  // Cargar noticias del usuario actual
  async cargarNoticias(): Promise<void> {
    const usuario = this.usuarioActual();
    if (!usuario) return;

    try {
      const noticias = await this.noticiaService.obtenerNoticiasUsuario(usuario.uid);
      this.noticias.set(noticias);
      this.limpiarMensajes();
    } catch (error) {
      this.mensajeError.set('Error al cargar las noticias');
      console.error(error);
    }
  }

  // Cambiar modo del formulario
  cambiarModo(modo: ModoFormulario, noticia?: Noticia): void {
    this.modo.set(modo);
    this.limpiarMensajes();

    if (modo === 'crear') {
      this.limpiarFormulario();
    } else if (modo === 'editar' && noticia) {
      this.noticiaSeleccionada.set(noticia);
      this.cargarFormulario(noticia);
    } else if (modo === 'lista') {
      this.limpiarFormulario();
      this.noticiaSeleccionada.set(null);
    }
  }

  // Cargar datos en el formulario
  cargarFormulario(noticia: Noticia): void {
    this.formTitulo.set(noticia.titulo);
    this.formSubtitulo.set(noticia.subtitulo);
    this.formContenido.set(noticia.contenido);
    this.formCategoriaId.set(noticia.categoriaId);
    this.formImagenes.set([...noticia.imagen]);
  }

  // Limpiar formulario
  limpiarFormulario(): void {
    this.formTitulo.set('');
    this.formSubtitulo.set('');
    this.formContenido.set('');
    this.formCategoriaId.set('');
    this.formImagenes.set(['']);
  }

  // Agregar campo de imagen
  agregarImagen(): void {
    this.formImagenes.update(imgs => [...imgs, '']);
  }

  // Eliminar campo de imagen
  eliminarImagen(index: number): void {
    this.formImagenes.update(imgs => imgs.filter((_, i) => i !== index));
  }

  // Actualizar imagen en índice específico
  actualizarImagen(index: number, valor: string): void {
    this.formImagenes.update(imgs => {
      const nuevas = [...imgs];
      nuevas[index] = valor;
      return nuevas;
    });
  }

  // Guardar noticia (crear o editar)
  async guardarNoticia(): Promise<void> {
    if (!this.formularioValido()) {
      this.mensajeError.set('Por favor completa todos los campos requeridos');
      return;
    }

    const usuario = this.usuarioActual();
    if (!usuario) return;

    const imagenesLimpias = this.formImagenes().filter(img => img.trim().length > 0);

    try {
      if (this.modo() === 'crear') {
        await this.noticiaService.crearNoticia({
          titulo: this.formTitulo().trim(),
          subtitulo: this.formSubtitulo().trim(),
          contenido: this.formContenido().trim(),
          categoriaId: this.formCategoriaId(),
          imagen: imagenesLimpias,
          autorUid: usuario.uid
        });
        this.mensajeExito.set('Noticia creada como borrador exitosamente');
      } else if (this.modo() === 'editar') {
        const noticia = this.noticiaSeleccionada();
        if (!noticia) return;

        await this.noticiaService.actualizarNoticia(noticia.id, {
          titulo: this.formTitulo().trim(),
          subtitulo: this.formSubtitulo().trim(),
          contenido: this.formContenido().trim(),
          categoriaId: this.formCategoriaId(),
          imagen: imagenesLimpias
        });
        this.mensajeExito.set('Noticia actualizada como borrador exitosamente');
      }

      await this.cargarNoticias();
      this.cambiarModo('lista');
    } catch (error) {
      this.mensajeError.set('Error al guardar la noticia');
      console.error(error);
    }
  }

  // Enviar a revisión (cambiar a PENDIENTE)
  async enviarARevision(): Promise<void> {
    if (!this.formularioValido()) {
      this.mensajeError.set('Por favor completa todos los campos requeridos');
      return;
    }

    const confirmar = confirm(
      '¿Estás seguro de enviar esta noticia a revisión? ' +
      'Una vez enviada, no podrás editarla hasta que sea revisada por un administrador.'
    );

    if (!confirmar) return;

    const usuario = this.usuarioActual();
    if (!usuario) return;

    const imagenesLimpias = this.formImagenes().filter(img => img.trim().length > 0);

    try {
      if (this.modo() === 'crear') {
        // Crear y cambiar estado
        const noticiaId = await this.noticiaService.crearNoticia({
          titulo: this.formTitulo().trim(),
          subtitulo: this.formSubtitulo().trim(),
          contenido: this.formContenido().trim(),
          categoriaId: this.formCategoriaId(),
          imagen: imagenesLimpias,
          autorUid: usuario.uid
        });
        await this.noticiaService.cambiarEstado(noticiaId, EstadoPublicacion.PENDIENTE);
      } else if (this.modo() === 'editar') {
        const noticia = this.noticiaSeleccionada();
        if (!noticia) return;

        // Actualizar y cambiar estado
        await this.noticiaService.actualizarNoticia(noticia.id, {
          titulo: this.formTitulo().trim(),
          subtitulo: this.formSubtitulo().trim(),
          contenido: this.formContenido().trim(),
          categoriaId: this.formCategoriaId(),
          imagen: imagenesLimpias
        });
        await this.noticiaService.cambiarEstado(noticia.id, EstadoPublicacion.PENDIENTE);
      }

      this.mensajeExito.set('Noticia enviada a revisión exitosamente');
      await this.cargarNoticias();
      this.cambiarModo('lista');
    } catch (error) {
      this.mensajeError.set('Error al enviar la noticia a revisión');
      console.error(error);
    }
  }

  // Cambiar estado de una noticia existente
  async cambiarEstadoNoticia(noticia: Noticia, nuevoEstado: EstadoPublicacion): Promise<void> {
    try {
      await this.noticiaService.cambiarEstado(noticia.id, nuevoEstado);
      this.mensajeExito.set(`Estado cambiado a ${nuevoEstado} exitosamente`);
      await this.cargarNoticias();
    } catch (error) {
      this.mensajeError.set('Error al cambiar el estado');
      console.error(error);
    }
  }

  // Mostrar confirmación de eliminación
  confirmarEliminar(noticia: Noticia): void {
    this.noticiaSeleccionada.set(noticia);
    this.mostrarConfirmacionEliminar.set(true);
  }

  // Cancelar eliminación
  cancelarEliminar(): void {
    this.noticiaSeleccionada.set(null);
    this.mostrarConfirmacionEliminar.set(false);
  }

  // Eliminar noticia
  async eliminarNoticia(): Promise<void> {
    const noticia = this.noticiaSeleccionada();
    if (!noticia) return;

    try {
      await this.noticiaService.eliminarNoticia(noticia.id);
      this.mensajeExito.set('Noticia eliminada exitosamente');
      await this.cargarNoticias();
      this.cancelarEliminar();
    } catch (error) {
      this.mensajeError.set('Error al eliminar la noticia');
      console.error(error);
    }
  }

  // Cambiar filtro de estado
  cambiarFiltro(filtro: FiltroEstado): void {
    this.filtroEstado.set(filtro);
  }

  // Obtener nombre de categoría
  obtenerNombreCategoria(categoriaId: string): string {
    const categoria = this.categorias.find(c => c.id === categoriaId);
    return categoria?.nombre || 'Sin categoría';
  }

  // Obtener clase CSS según estado
  obtenerClaseEstado(estado: EstadoPublicacion): string {
    switch (estado) {
      case EstadoPublicacion.BORRADOR:
        return 'estado-borrador';
      case EstadoPublicacion.PENDIENTE:
        return 'estado-pendiente';
      case EstadoPublicacion.PUBLICADO:
        return 'estado-publicado';
      case EstadoPublicacion.RECHAZADO:
        return 'estado-rechazado';
      default:
        return '';
    }
  }

  // Verificar si puede editar
  puedeEditar(noticia: Noticia): boolean {
    return noticia.estado === EstadoPublicacion.BORRADOR ||
           noticia.estado === EstadoPublicacion.RECHAZADO;
  }

  // Limpiar mensajes
  limpiarMensajes(): void {
    this.mensajeError.set('');
    this.mensajeExito.set('');
  }

  // Formatear fecha
  formatearFecha(fecha: Date): string {
    return new Date(fecha).toLocaleDateString('es-CO', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }
}
