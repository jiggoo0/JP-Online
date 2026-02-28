import { Service } from "@/types/services";

export * from "@/types/services";

/**
 * =========================================
 * ✅ Services Dataset - Simplified for Mass Market
 * =========================================
 */
export const SERVICES: Service[] = [
  {
    id: "Financial-01",
    slug: "financial-account-structuring",
    category: "FINANCIAL",
    name: "รับวางสเตทเม้นท์ธนาคาร (Statement Structuring)",
    title: "Financial Account Structuring - ปรับสมดุลบัญชีเพื่อกู้บ้าน/รถ/วีซ่า",
    tagline: "เปลี่ยนบัญชีรกรุงรัง ให้เป็น 'โปรไฟล์การเงิน' ที่ธนาคารเชื่อถือ",
    description:
      "สำหรับอาชีพอิสระที่เงินเข้าไม่นิ่ง หรือใช้จ่ายผ่านบัญชีจนดูเหมือนไม่มีเหลือ เราช่วยวางโครงสร้างการเดินบัญชีใหม่ให้มีความสมเหตุสมผลตามเกณฑ์ของธนาคารและสถานทูต เพื่อเพิ่มโอกาสการกู้ผ่าน 100%",
    timeline: "ปรับจูนรอบบัญชี 3 - 6 เดือน",
    feeEstimate: "เริ่มต้น 5,xxx.- (ขึ้นอยู่กับเคส)",
    imageUrl: "/assets/services/srv-financial-struct.webp",
    contactMethod: "LINE",
    icon: "Shield",
    protocol: [
      {
        title: "Case Diagnosis",
        description: "วิเคราะห์บัญชีย้อนหลังและระบุจุดที่ทำให้กู้ไม่ผ่าน",
      },
      {
        title: "Transaction Mapping",
        description: "ออกแบบตรรกะรายได้-รายจ่าย (Cash Flow) ให้สอดคล้องกับอาชีพ",
      },
      {
        title: "Payment Engagement",
        description: "ยืนยันยอดและเริ่มดำเนินการวางแผนทันทีหลังชำระค่าที่ปรึกษา",
      },
    ],
    features: ["Statement Logic Optimization", "High-Success Rate", "Confidential Care"],
  },
  {
    id: "Doc-01",
    slug: "customized-income-documentation",
    category: "DOCUMENTATION",
    name: "รับทำใบรับรองเงินเดือน (Income Documentation)",
    title: "Income Documentation Strategy - ออกแบบเอกสารรับรองรายได้ แม่ค้าออนไลน์",
    tagline: "เอกสารที่สถานทูตและธนาคารยอมรับ แม้ไม่มีบริษัทหรือไม่ได้จดทะเบียน",
    description:
      "บริการจัดร่างเอกสารรับรองการทำงานและที่มาของรายได้ (High-Fidelity) สำหรับแม่ค้าออนไลน์ ฟรีแลนซ์ หรือคนทำงานอิสระที่ต้องการหลักฐานยืนยันตัวตนทางการเงินที่จับต้องได้และตรวจสอบได้จริง",
    timeline: "1 - 2 วันทำการ",
    feeEstimate: "เริ่มต้น 3,xxx.-",
    imageUrl: "/assets/services/srv-income-grid.webp",
    contactMethod: "LINE",
    icon: "FileText",
    protocol: [
      {
        title: "Occupational Alignment",
        description: "เลือกตำแหน่งงานและอาชีพให้แมตช์กับรายการเดินบัญชีจริง",
      },
      {
        title: "Drafting & Execution",
        description: "เริ่มกระบวนการจัดเตรียมเอกสารทันทีหลังจากได้รับการยืนยันการชำระเงิน",
      },
      {
        title: "Final Verification",
        description: "ตรวจสอบความสอดคล้อง (Logic Check) รอบสุดท้ายก่อนส่งมอบงาน",
      },
    ],
    features: ["Pixel-Perfect Drafts", "Fast Delivery", "Audit-Compliant"],
  },
  {
    id: "SRV-IMM-01",
    slug: "flight-hotel-confirmed-status",
    category: "IMMIGRATION",
    name: "จองตั๋วเครื่องบินยื่นวีซ่า (GDS Active Status)",
    title: "GDS Reservation Protocol - ใบจองสถานะจริง ตรวจสอบรหัส PNR ได้",
    tagline: "แก้ปัญหา 'ใบจองปลอม' จนโดนแบน... เราจองผ่านระบบสากลที่มีชื่อคุณจริง",
    description:
      "บริการใบจองตั๋วเครื่องบินและโรงแรมผ่านระบบ GDS (Global Distribution System) สถานทูตตรวจสอบได้จริง มีรหัส PNR ยืนยัน เหมาะสำหรับเคสวีซ่าเชงเก้น วีซ่าอเมริกา ที่ต้องการความชัวร์ 100%",
    timeline: "ด่วนพิเศษ 3-6 ชั่วโมง",
    feeEstimate: "เริ่มต้น 1,xxx.-",
    imageUrl: "/assets/services/srv-gds-status.webp",
    contactMethod: "LINE",
    icon: "Globe",
    protocol: [
      {
        title: "System Injection",
        description: "จองผ่านระบบสากลเพื่อให้ชื่อของคุณขึ้นในฐานข้อมูลสายการบิน",
      },
      {
        title: "Status Monitoring",
        description: "เริ่มกระบวนการออกใบจองและเช็คสถานะทันทีหลังแจ้งโอน",
      },
      {
        title: "Code Issuance",
        description: "ส่งมอบรหัส PNR และใบจองที่สามารถนำไปเช็คบนเว็บสายการบินได้เลย",
      },
    ],
    features: ["Verified PNR Code", "Fast Turnaround", "Worldwide Access"],
  },
];
