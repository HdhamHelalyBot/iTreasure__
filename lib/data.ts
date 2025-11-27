
import type { Category, Product } from '../types';

export const categories: Category[] = [
  { id: '1', name: { en: 'Connectors & Cables', ar: 'الموصلات والكابلات' }, imageUrl: 'https://picsum.photos/seed/cables/300/200' },
  { id: '2', name: { en: 'Semiconductors', ar: 'أشباه الموصلات' }, imageUrl: 'https://picsum.photos/seed/semi/300/200' },
  { id: '3', name: { en: 'Optoelectronics & LEDs', ar: 'الإلكترونيات الضوئية و LED' }, imageUrl: 'https://picsum.photos/seed/led/300/200' },
  { id: '4', name: { en: 'Electromechanical', ar: 'الكهروميكانيكية' }, imageUrl: 'https://picsum.photos/seed/electro/300/200' },
  { id: '5', name: { en: 'Automation & Control', ar: 'الأتمتة والتحكم' }, imageUrl: 'https://picsum.photos/seed/auto/300/200' },
  { id: '6', name: { en: 'Computer Tools', ar: 'أدوات الكمبيوتر' }, imageUrl: 'https://picsum.photos/seed/tools/300/200' },
  { id: '7', name: { en: 'Development Tools', ar: 'أدوات التطوير' }, imageUrl: 'https://picsum.photos/seed/dev/300/200' },
  { id: '8', name: { en: 'Power & Protection', ar: 'مصادر الطاقة والحماية' }, imageUrl: 'https://picsum.photos/seed/power/300/200' },
  { id: '9', name: { en: 'Engineering Software', ar: 'برمجيات الهندسة' }, imageUrl: 'https://picsum.photos/seed/soft/300/200' },
  { id: '10', name: { en: 'SBC Systems', ar: 'أنظمة SBC' }, imageUrl: 'https://picsum.photos/seed/sbc/300/200' },
  { id: '11', name: { en: 'Raspberry Pi', ar: 'راسبيري باي' }, imageUrl: 'https://picsum.photos/seed/rpi/300/200' },
  { id: '12', name: { en: 'Motherboards', ar: 'اللوحات الأم' }, imageUrl: 'https://picsum.photos/seed/mobo/300/200' },
];

export const featuredProducts: Product[] = [
  {
    id: 'p1',
    name: { en: 'QuantumCore X Motherboard', ar: 'لوحة أم QuantumCore X' },
    description: { en: 'High-performance motherboard for gaming and professional workstations. Supports latest-gen CPUs.', ar: 'لوحة أم عالية الأداء للألعاب ومحطات العمل الاحترافية. تدعم أحدث جيل من وحدات المعالجة المركزية.' },
    imageUrl: 'https://picsum.photos/seed/product1/400/300',
  },
  {
    id: 'p2',
    name: { en: 'Raspberry Pi 5 - 8GB', ar: 'راسبيري باي 5 - 8 جيجابايت' },
    description: { en: 'The latest single-board computer, perfect for DIY projects, home automation, and learning to code.', ar: 'أحدث حاسوب أحادي اللوحة، مثالي لمشاريع DIY، وأتمتة المنزل، وتعلم البرمجة.' },
    imageUrl: 'https://picsum.photos/seed/product2/400/300',
  },
  {
    id: 'p3',
    name: { en: 'Photonex LED Array', ar: 'مصفوفة LED من فوتونيكس' },
    description: { en: 'Ultra-bright, programmable RGB LED array for custom lighting and visual displays.', ar: 'مصفوفة LED قابلة للبرمجة فائقة السطوع للإضاءة المخصصة والعروض المرئية.' },
    imageUrl: 'https://picsum.photos/seed/product3/400/300',
  },
   {
    id: 'p4',
    name: { en: 'Titan Power Supply 850W', ar: 'مزود طاقة تايتان 850 واط' },
    description: { en: 'A reliable and efficient 850W power supply unit with modular cables for clean builds.', ar: 'وحدة تزويد طاقة موثوقة وفعالة بقوة 850 واط مع كابلات معيارية لتركيبات نظيفة.' },
    imageUrl: 'https://picsum.photos/seed/product4/400/300',
  },
];
