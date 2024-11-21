import React from 'react';
import { 
  FileText, 
  CheckSquare, 
  Users, 
  Calendar,
  TrendingUp,
  AlertCircle,
  Award,
  BookOpen,
  Clock,
  FileCheck
} from 'lucide-react';
import { useAuth } from '../hooks/useAuth';

const Dashboard = () => {
  const { user } = useAuth();

  const renderAdminDashboard = () => (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Proyectos Activos</p>
              <p className="text-2xl font-semibold mt-1">24</p>
            </div>
            <div className="bg-blue-50 p-3 rounded-lg">
              <FileText className="text-blue-600" size={24} />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm text-green-600">
            <TrendingUp size={16} className="mr-1" />
            <span>12% de incremento</span>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Usuarios Activos</p>
              <p className="text-2xl font-semibold mt-1">156</p>
            </div>
            <div className="bg-purple-50 p-3 rounded-lg">
              <Users className="text-purple-600" size={24} />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm text-purple-600">
            <Calendar size={16} className="mr-1" />
            <span>Últimos 30 días</span>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Convocatorias Activas</p>
              <p className="text-2xl font-semibold mt-1">3</p>
            </div>
            <div className="bg-green-50 p-3 rounded-lg">
              <Award className="text-green-600" size={24} />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm text-green-600">
            <Clock size={16} className="mr-1" />
            <span>2 próximas a finalizar</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <h3 className="text-lg font-semibold mb-4">Actividad Reciente</h3>
          <div className="space-y-4">
            {[
              { icon: FileText, text: 'Nueva convocatoria creada', time: 'Hace 2 horas' },
              { icon: Users, text: '5 nuevos usuarios registrados', time: 'Hace 4 horas' },
              { icon: CheckSquare, text: '12 proyectos revisados', time: 'Hace 1 día' },
            ].map((item, i) => (
              <div key={i} className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg">
                <div className="bg-blue-100 p-2 rounded">
                  <item.icon className="text-blue-600" size={20} />
                </div>
                <div>
                  <p className="font-medium">{item.text}</p>
                  <p className="text-sm text-gray-500">{item.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <h3 className="text-lg font-semibold mb-4">Estado del Sistema</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Espacio de almacenamiento</span>
              <span className="text-sm font-medium text-blue-600">75%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-600 h-2 rounded-full" style={{ width: '75%' }}></div>
            </div>

            <div className="flex justify-between items-center mt-4">
              <span className="text-gray-600">Rendimiento del servidor</span>
              <span className="text-sm font-medium text-green-600">Óptimo</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-green-600 h-2 rounded-full" style={{ width: '90%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  const renderCoordinatorDashboard = () => (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Proyectos Pendientes</p>
              <p className="text-2xl font-semibold mt-1">15</p>
            </div>
            <div className="bg-yellow-50 p-3 rounded-lg">
              <Clock className="text-yellow-600" size={24} />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm text-yellow-600">
            <AlertCircle size={16} className="mr-1" />
            <span>5 requieren atención</span>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Revisiones Asignadas</p>
              <p className="text-2xl font-semibold mt-1">8</p>
            </div>
            <div className="bg-blue-50 p-3 rounded-lg">
              <CheckSquare className="text-blue-600" size={24} />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm text-blue-600">
            <Calendar size={16} className="mr-1" />
            <span>3 próximas a vencer</span>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Proyectos Completados</p>
              <p className="text-2xl font-semibold mt-1">42</p>
            </div>
            <div className="bg-green-50 p-3 rounded-lg">
              <FileCheck className="text-green-600" size={24} />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm text-green-600">
            <TrendingUp size={16} className="mr-1" />
            <span>15% más que el mes pasado</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <h3 className="text-lg font-semibold mb-4">Próximas Revisiones</h3>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 p-2 rounded">
                    <FileText className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <p className="font-medium">Proyecto {i}</p>
                    <p className="text-sm text-gray-500">Vence en {i * 2} días</p>
                  </div>
                </div>
                <span className="px-3 py-1 text-sm bg-yellow-100 text-yellow-700 rounded-full">
                  Pendiente
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <h3 className="text-lg font-semibold mb-4">Estadísticas de Revisión</h3>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>Proyectos Revisados</span>
                <span>75%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '75%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>Tiempo Promedio de Revisión</span>
                <span>2.5 días</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-600 h-2 rounded-full" style={{ width: '60%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  const renderPresenterDashboard = () => (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Mis Proyectos</p>
              <p className="text-2xl font-semibold mt-1">3</p>
            </div>
            <div className="bg-blue-50 p-3 rounded-lg">
              <FileText className="text-blue-600" size={24} />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm text-blue-600">
            <Clock size={16} className="mr-1" />
            <span>1 pendiente de envío</span>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Documentos Pendientes</p>
              <p className="text-2xl font-semibold mt-1">2</p>
            </div>
            <div className="bg-yellow-50 p-3 rounded-lg">
              <BookOpen className="text-yellow-600" size={24} />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm text-yellow-600">
            <AlertCircle size={16} className="mr-1" />
            <span>Vence en 5 días</span>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Proyectos Aprobados</p>
              <p className="text-2xl font-semibold mt-1">1</p>
            </div>
            <div className="bg-green-50 p-3 rounded-lg">
              <Award className="text-green-600" size={24} />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm text-green-600">
            <FileCheck size={16} className="mr-1" />
            <span>Último aprobado hace 2 días</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <h3 className="text-lg font-semibold mb-4">Estado de Proyectos</h3>
          <div className="space-y-4">
            {[
              { name: 'Proyecto IoT', status: 'En revisión', date: 'Enviado hace 3 días' },
              { name: 'App Móvil', status: 'Pendiente', date: 'Vence en 5 días' },
              { name: 'Sistema Web', status: 'Aprobado', date: 'Completado' },
            ].map((project, i) => (
              <div key={i} className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 p-2 rounded">
                    <FileText className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <p className="font-medium">{project.name}</p>
                    <p className="text-sm text-gray-500">{project.date}</p>
                  </div>
                </div>
                <span className={`px-3 py-1 text-sm rounded-full ${
                  project.status === 'Aprobado'
                    ? 'bg-green-100 text-green-700'
                    : project.status === 'En revisión'
                    ? 'bg-yellow-100 text-yellow-700'
                    : 'bg-gray-100 text-gray-700'
                }`}>
                  {project.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <h3 className="text-lg font-semibold mb-4">Próximos Vencimientos</h3>
          <div className="space-y-4">
            {[
              { name: 'Memoria Técnica', project: 'App Móvil', days: 5 },
              { name: 'Video Demo', project: 'App Móvil', days: 7 },
              { name: 'Presupuesto', project: 'App Móvil', days: 5 },
            ].map((doc, i) => (
              <div key={i} className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="bg-yellow-100 p-2 rounded">
                    <BookOpen className="text-yellow-600" size={20} />
                  </div>
                  <div>
                    <p className="font-medium">{doc.name}</p>
                    <p className="text-sm text-gray-500">{doc.project}</p>
                  </div>
                </div>
                <span className="text-sm text-yellow-600">
                  {doc.days} días restantes
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );

  const renderReviewerDashboard = () => (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Revisiones Pendientes</p>
              <p className="text-2xl font-semibold mt-1">5</p>
            </div>
            <div className="bg-yellow-50 p-3 rounded-lg">
              <Clock className="text-yellow-600" size={24} />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm text-yellow-600">
            <AlertCircle size={16} className="mr-1" />
            <span>2 urgentes</span>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Revisiones Completadas</p>
              <p className="text-2xl font-semibold mt-1">12</p>
            </div>
            <div className="bg-green-50 p-3 rounded-lg">
              <CheckSquare className="text-green-600" size={24} />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm text-green-600">
            <TrendingUp size={16} className="mr-1" />
            <span>4 esta semana</span>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Tiempo Promedio</p>
              <p className="text-2xl font-semibold mt-1">2.5 días</p>
            </div>
            <div className="bg-blue-50 p-3 rounded-lg">
              <FileCheck className="text-blue-600" size={24} />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm text-blue-600">
            <TrendingUp size={16} className="mr-1" />
            <span>Mejora del 15%</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <h3 className="text-lg font-semibold mb-4">Próximas Revisiones</h3>
          <div className="space-y-4">
            {[
              { name: 'Sistema IoT', deadline: '2 días', priority: 'Alta' },
              { name: 'App Educativa', deadline: '4 días', priority: 'Media' },
              { name: 'Plataforma Web', deadline: '5 días', priority: 'Baja' },
            ].map((review, i) => (
              <div key={i} className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 p-2 rounded">
                    <FileText className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <p className="font-medium">{review.name}</p>
                    <p className="text-sm text-gray-500">Vence en {review.deadline}</p>
                  </div>
                </div>
                <span className={`px-3 py-1 text-sm rounded-full ${
                  review.priority === 'Alta'
                    ? 'bg-red-100 text-red-700'
                    : review.priority === 'Media'
                    ? 'bg-yellow-100 text-yellow-700'
                    : 'bg-green-100 text-green-700'
                }`}>
                  {review.priority}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <h3 className="text-lg font-semibold mb-4">Estadísticas de Revisión</h3>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>Eficiencia de Revisión</span>
                <span>85%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-600 h-2 rounded-full" style={{ width: '85%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>Satisfacción</span>
                <span>92%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '92%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <div className="p-8 space-y-8">
      <h1 className="text-2xl font-bold text-gray-900">
        {user.role === 'admin' && 'Panel de Administración'}
        {user.role === 'coordinator' && 'Panel de Coordinación'}
        {user.role === 'presenter' && 'Mis Proyectos'}
        {user.role === 'reviewer' && 'Panel de Revisión'}
      </h1>

      {user.role === 'admin' && renderAdminDashboard()}
      {user.role === 'coordinator' && renderCoordinatorDashboard()}
      {user.role === 'presenter' && renderPresenterDashboard()}
      {user.role === 'reviewer' && renderReviewerDashboard()}
    </div>
  );
};

export default Dashboard;