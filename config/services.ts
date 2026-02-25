import { Shield, LucideIcon, Globe, FileText, Briefcase } from "lucide-react";

/**
 * =========================================
 * ✅ Service & Protocol Data Model (Production Ready)
 * =========================================
 */

export interface ProtocolStep {
  title: string;
  description: string;
}

export const CATEGORIES = [
  "FINANCIAL",
  "IMMIGRATION",
  "DOCUMENTATION",
  "SYSTEMS",
  "INFRASTRUCTURE",
] as const;

export type ServiceCategory = (typeof CATEGORIES)[number];

export interface Service {
  id: string;
  slug: string;
  name: string;
  title: string;
  category: ServiceCategory;
  description: string;
  protocol: ProtocolStep[];
  feeEstimate: string;
  timeline: string;
  tagline: string;
  imageUrl: string;
  contactMethod: "LINE";
  icon: LucideIcon;
  tags?: string[];
  features?: string[];
}

const DEFAULT_SERVICE_IMAGE =
  "https://ksiobbrextlywypdzaze.supabase.co/storage/v1/object/public/user-uploads/Service/Service.webp";

/**
 * =========================================
 * ✅ Services Dataset - Simplified for Mass Market
 * =========================================
 */
export const SERVICES: Service[] = [
  {
    id: "SRV-FIN-01",
    slug: "financial-account-structuring",
    category: "FINANCIAL",
    name: "Cashflow Architecture Optimization",
    title: "Financial Profile Engineering - วางโครงสร้างสเตทเม้นระดับสูง",
    tagline: "ออกแบบกระแสเงินสดเชิงตรรกะ เพื่ออุดรอยโหว่ในการตรวจสอบ (Audit-Ready Profile)",
    description:
      "เปลี่ยนข้อมูลการเดินบัญชีที่สับสนให้กลายเป็นโครงสร้างที่มีตรรกะรองรับ เราใช้หลักการ Internal Audit Simulation เพื่อจำลองเกณฑ์การตรวจของธนาคารและสถานทูต ทำให้โปรไฟล์ของคุณผ่านเกณฑ์ AML และ DSR ได้อย่างไร้ที่ติ",
    timeline: "3 - 7 วัน",
    feeEstimate: "ประเมินตามความซับซ้อนของเคส",
    imageUrl: DEFAULT_SERVICE_IMAGE,
    contactMethod: "LINE",
    icon: Shield,
    protocol: [
      {
        title: "Gap Analysis",
        description: "วิเคราะห์จุดอ่อนของประวัติทางการเงินและระบุรอยโหว่ที่ทำให้ถูกปฏิเสธในอดีต",
      },
      {
        title: "Liquidity Structuring",
        description: "ออกแบบจังหวะการไหลเวียนของกระแสเงินสดให้สมเหตุสมผลตามแหล่งที่มารายได้",
      },
      {
        title: "Compliance Verification",
        description:
          "ตรวจสอบความสมบูรณ์ขั้นสุดท้ายเพื่อให้มั่นใจว่าเอกสารพร้อมรับการตรวจสอบเชิงลึก",
      },
    ],
    features: ["Risk Mitigation Strategy", "Logical Cashflow Alignment", "Audit-Ready Support"],
  },
  {
    id: "SRV-FIN-02",
    slug: "credit-leverage-infrastructure",
    category: "FINANCIAL",
    name: "Credit Leverage Infrastructure",
    title: "Credit Positioning Strategy - วางระบบฐานข้อมูลเพื่อการกู้ยืม",
    tagline: "สร้างความน่าเชื่อถือผ่านการวางโครงสร้างรายได้ สำหรับเคสซับซ้อนและวงเงินสูง",
    description:
      "เหมาะสำหรับผู้มีอุปสรรคด้านหลักฐานรายได้ไม่ชัดเจน เราช่วยวางโครงสร้าง Credit Positioning ใหม่ทั้งหมด เพื่อเพิ่ม Leverage ให้กับโปรไฟล์ของคุณในการเข้าถึงสินเชื่อระดับสถาบันการเงิน",
    timeline: "2 - 4 สัปดาห์",
    feeEstimate: "ขึ้นอยู่กับวงเงินเป้าหมาย",
    imageUrl: DEFAULT_SERVICE_IMAGE,
    contactMethod: "LINE",
    icon: Briefcase,
    protocol: [
      {
        title: "Capacity Assessment",
        description: "ประเมินขีดความสามารถในการกู้และวางตำแหน่งทางการเงินเป้าหมาย",
      },
      {
        title: "Source of Wealth Protocol",
        description: "สร้างตรรกะที่มาของรายได้และเอกสารประกอบที่สถาบันการเงินให้การยอมรับ",
      },
      {
        title: "System Finalization",
        description: "ดำเนินการส่งมอบงานและดูแลการอนุมัติในระดับโครงสร้าง",
      },
    ],
    features: [
      "Business Credit Positioning",
      "Income Logic Enhancement",
      "Institutional Trust Building",
    ],
  },
  {
    id: "SRV-DOC-01",
    slug: "customized-income-documentation",
    category: "DOCUMENTATION",
    name: "Logic-based Income Documentation",
    title: "Income Protocol Drafting - จัดทำเอกสารรับรองรายได้เชิงตรรกะ",
    tagline: "การร่างเอกสารรับรองที่เน้น 'ที่มาของเงิน' มากกว่าแค่ข้อมูลเบื้องต้น",
    description:
      "สำหรับการทำงานอิสระหรือฟรีแลนซ์รายได้สูงที่ต้องการเอกสารยืนยันสถานะที่ได้รับความเชื่อถือในระดับสากล เราเน้นการสร้าง 'Paper Trail' ที่แข็งแกร่งและสมเหตุสมผล",
    timeline: "1 - 2 วัน",
    feeEstimate: "ราคาตามประเภทเอกสาร",
    imageUrl: DEFAULT_SERVICE_IMAGE,
    contactMethod: "LINE",
    icon: FileText,
    protocol: [
      {
        title: "Profiling Selection",
        description: "เลือกรูปแบบอาชีพและการทำงานที่สอดคล้องกับพฤติกรรมการใช้จ่ายจริง",
      },
      {
        title: "Technical Drafting",
        description: "จัดทำเอกสารด้วยรูปแบบมาตรฐานสากล พร้อมระบบตรวจสอบย้อนกลับ",
      },
      {
        title: "Quality Audit",
        description: "ตรวจสอบรายละเอียดปลีกย่อยเพื่อให้มั่นใจว่าเอกสารไร้ที่ติในสายตาเจ้าหน้าที่",
      },
    ],
    features: [
      "High-End Professional Drafting",
      "Verified Source of Wealth Logic",
      "International Standards",
    ],
  },
  {
    id: "SRV-DOC-02",
    slug: "physical-credential-logistics",
    category: "DOCUMENTATION",
    name: "รับทำบัตร PVC และบัตรสมาชิกทุกชนิด (ตามแบบลูกค้า)",
    title: "รับทำบัตรตามสั่ง - พิมพ์บัตร PVC/Smart Card ทุกรูปแบบ",
    tagline: "งานพิมพ์บัตรคุณภาพสูง จะมีชิปหรือแถบแม่เหล็กเราก็ทำได้หมด",
    description:
      "รับพิมพ์บัตรทุกรูปแบบตามที่ลูกค้ากำหนด งานละเอียด สีชัด ไม่ลอก รองรับการลงข้อมูลในชิปหรือแถบแม่เหล็กตามไฟล์งานของคุณ ส่งงานไวทั่วประเทศ",
    timeline: "1 - 3 วัน",
    feeEstimate: "ตามจำนวนและเทคนิค",
    imageUrl: DEFAULT_SERVICE_IMAGE,
    contactMethod: "LINE",
    icon: FileText,
    protocol: [
      { title: "รับแบบงาน", description: "รับไฟล์งานและข้อมูลที่คุณต้องการลงในบัตร" },
      { title: "ผลิตงานไว", description: "พิมพ์ด้วยเครื่องคุณภาพสูง สีเป๊ะ ทันใจ" },
      { title: "ทดสอบการใช้งาน", description: "เช็คชิปและแถบแม่เหล็กว่าใช้งานได้จริงก่อนส่ง" },
    ],
    features: ["พิมพ์ชัด ไม่แตก", "บัตรชิป/แถบแม่เหล็ก", "ส่งด่วนทั่วไทย"],
  },
  {
    id: "SRV-DOC-03",
    slug: "universal-document-drafting-protocol",
    category: "DOCUMENTATION",
    name: "รับทำร่างเอกสารทุกชนิด (มีแบบมา เราจัดให้เป๊ะ)",
    title: "จัดทำเอกสารตามสั่ง - รับทำร่างเอกสารทุกรูปแบบตามต้นฉบับ",
    tagline: "งานละเอียดระดับพรีเมียม... จะแบบไหน ชนิดไหน เราจัดให้ได้หมด",
    description:
      "รับจัดทำร่างเอกสารและงานจัดวางเลย์เอาต์ทุกประเภทตามมาตรฐานของเอกสารนั้นๆ เน้นความเป๊ะของตัวอักษรและรูปแบบงานพิมพ์ สำหรับคนที่มีต้นฉบับแล้วต้องการงานที่เนียนที่สุด",
    timeline: "1 - 2 วัน [งานด่วนจัดให้]",
    feeEstimate: "ราคาตามความละเอียดของงาน",
    imageUrl: DEFAULT_SERVICE_IMAGE,
    contactMethod: "LINE",
    icon: FileText,
    protocol: [
      { title: "ส่งแบบงาน", description: "แจ้งประเภทเอกสารและส่งแบบงานที่คุณต้องการให้เราดู" },
      { title: "จัดทำร่าง", description: "ดำเนินการจัดร่างเอกสารโดยอิงตามรูปแบบมาตรฐาน 100%" },
      {
        title: "ตรวจความเนียน",
        description: "เช็คความถูกต้องของ Font, ระยะห่าง และตราประทับต่างๆ",
      },
    ],
    features: ["ทำได้ทุกชนิดที่มีแบบมา", "งานพิมพ์ความละเอียดสูง", "รักษาความลับลูกค้าสูงสุด"],
  },
  {
    id: "SRV-IMM-01",
    slug: "flight-hotel-confirmed-status",
    category: "IMMIGRATION",
    name: "GDS System Status Injection",
    title: "GDS Reservation Protocol - ใบจองตั๋ว/โรงแรมสถานะจริงในระบบ",
    tagline: "Injection สถานะการจองที่ตรวจสอบได้จริงผ่านรหัส PNR ในระบบสากล",
    description:
      "เราไม่ได้แค่พิมพ์กระดาษ แต่เราทำ 'System Injection' เพื่อให้ชื่อของคุณปรากฏในฐานข้อมูลสากล (Global Distribution System) สถานทูตสามารถตรวจสอบสถานะยืนยันได้จริง 100% ตลอดช่วงการพิจารณา",
    timeline: "ไม่เกิน 6 ชม.",
    feeEstimate: "ราคามาตรฐานระบบ",
    imageUrl: DEFAULT_SERVICE_IMAGE,
    contactMethod: "LINE",
    icon: Globe,
    protocol: [
      { title: "GDS Access", description: "เข้าถึงระบบสำรองที่นั่งสากลเพื่อลงทะเบียนสถานะยืนยัน" },
      {
        title: "Verification Check",
        description: "ตรวจสอบความถูกต้องของรหัส PNR บนหน้าเว็บไซต์ผู้ให้บริการโดยตรง",
      },
      {
        title: "Document Issuance",
        description: "ออกเอกสารยืนยันการจองที่มีความน่าเชื่อถือสูงสุดเพื่อการยื่นวีซ่า",
      },
    ],
    features: ["Verified PNR Code", "Real-time Traceability", "Official GDS Status"],
  },
  {
    id: "SRV-IMM-02",
    slug: "lifestyle-mobility-independent-visa",
    category: "IMMIGRATION",
    name: "Lifestyle Mobility Strategy",
    title: "Immigration Profile Profiling - แก้เคสยากสำหรับอาชีพอิสระ",
    tagline: "ออกแบบแผนการเดินทางและโปรไฟล์เพื่อความคล่องตัวในระดับสากล",
    description:
      "เชี่ยวชาญการดูแลเคสสุภาพสตรีและฟรีแลนซ์ที่ต้องการเดินทางไปต่างประเทศแต่มีข้อจำกัดด้านอาชีพ เราใช้ Logic-based Profiling เพื่ออุดทุกรอยโหว่ที่สถานทูตมักจะสงสัย เปลี่ยนความเสี่ยงให้เป็นความแน่นอน",
    timeline: "ตามเงื่อนไขแต่ละเคส",
    feeEstimate: "คุยส่วนตัวเพื่อประเมินแผน",
    imageUrl: DEFAULT_SERVICE_IMAGE,
    contactMethod: "LINE",
    icon: Globe,
    protocol: [
      {
        title: "Profile Logic Design",
        description: "วางแผนการทำงานและการเงินให้ดูสมเหตุสมผลตามสไตล์การใช้ชีวิต",
      },
      {
        title: "Itinerary Structuring",
        description: "ออกแบบแผนการเดินทางที่มีจุดประสงค์ชัดเจนและน่าเชื่อถือ",
      },
      {
        title: "Communication Audit",
        description: "เตรียมความพร้อมด้านข้อมูลเพื่อตอบข้อซักถามอย่างมั่นใจและสอดคล้องกัน",
      },
    ],
    features: [
      "Independent Lifestyle Support",
      "Hard Case Resolution",
      "Comprehensive Gap Closure",
    ],
  },
  {
    id: "SRV-SYS-01",
    slug: "complete-profile-infrastructure",
    category: "SYSTEMS",
    name: "ดูแลโปรไฟล์การเงินและเอกสารระยะยาว (รายเดือน)",
    title: "ดูแลโปรไฟล์ - บริการวางระบบความน่าเชื่อถือให้คุณถาวร",
    tagline: "สร้างรากฐานให้ตัวคุณดูดีในระบบสากล เพื่อโอกาสการกู้และเดินทางในอนาคต",
    description:
      "เหมาะสำหรับคนที่ต้องการความมั่นคงระยะยาว เราช่วยดูแลทั้งเรื่องเงินในบัญชี เอกสาร และประวัติต่างๆ ให้พร้อมสำหรับการทำธุรกรรมใหญ่ๆ ตลอดเวลา",
    timeline: "ดูแลต่อเนื่องรายเดือน",
    feeEstimate: "ค่าบริการรายเดือน",
    imageUrl: DEFAULT_SERVICE_IMAGE,
    contactMethod: "LINE",
    icon: Shield,
    protocol: [
      { title: "ตรวจประวัติ", description: "เช็คจุดอ่อนในอดีตและวางทางแก้แบบยั่งยืน" },
      { title: "คุมยอดเงิน", description: "ดูแลการเดินบัญชีให้สวยงามสม่ำเสมอทุกเดือน" },
      { title: "ตรวจความพร้อม", description: "เช็คความสมบูรณ์ของโปรไฟล์ทุกครั้งก่อนเริ่มงานใหญ่" },
    ],
    features: ["ที่ปรึกษาส่วนตัว", "คุมสเตทเม้นรายเดือน", "วางแผนอนาคตทางการเงิน"],
  },
];
