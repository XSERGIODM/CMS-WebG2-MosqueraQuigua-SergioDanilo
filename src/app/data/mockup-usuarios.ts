import { Usuario } from '../models/Usuario.model';
import { TipoRole } from '../enum/TipoRole';

export const MOCKUP_USUARIOS: Usuario[] = [
  {
    uid: 'user-001',
    email: 'maria.silva@noticiasmazonicas.com',
    nombre: 'María',
    apellido: 'Silva',
    numero: '+57 310 456 7890',
    rol: TipoRole.EDITOR
  },
  {
    uid: 'user-002',
    email: 'carlos.mendoza@noticiasmazonicas.com',
    nombre: 'Carlos',
    apellido: 'Mendoza',
    numero: '+57 320 123 4567',
    rol: TipoRole.REPORTERO
  },
  {
    uid: 'user-003',
    email: 'ana.ramirez@noticiasmazonicas.com',
    nombre: 'Ana',
    apellido: 'Ramírez',
    numero: '+57 315 987 6543',
    rol: TipoRole.REPORTERO
  },
  {
    uid: 'user-004',
    email: 'jose.torres@noticiasmazonicas.com',
    nombre: 'José',
    apellido: 'Torres',
    numero: '+57 318 234 5678',
    rol: TipoRole.REPORTERO
  }
];
