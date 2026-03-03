import { Service } from "@/types/services";

export * from "@/types/services";

/**
 * SERVICE INFRASTRUCTURE DATASET
 * Standard: The Pathfinder Strategic Protocol v1.0
 */
export const SERVICES: Service[] = [
  {
    id: "SRV-FIN-01",
    slug: "capital-leverage-infrastructure",
    category: "FINANCIAL",
    name: "Financial & Credit Advisory",
    title: "ที่ปรึกษาวางแผนสเตทเม้นท์และสินเชื่อ - อาชีพอิสระกู้บ้านผ่าน 100%",
    tagline: "เปลี่ยนบัญชีที่ธนาคารส่ายหน้า ให้เป็นโปรไฟล์ลูกค้าระดับพรีเมียม",
    description:
      "รับวางแผนสเตทเม้นท์ธนาคารและจัดทำโครงสร้างรายได้เชิงตรรกะ เพื่อแก้ปัญหากู้บ้านไม่ผ่าน กู้รถไม่ผ่าน สำหรับแม่ค้าออนไลน์และฟรีแลนซ์ที่ไม่มีสลิปเงินเดือน",
    timeline: "Execution: 3 - 6 Months Strategy",
    feeEstimate: "Consultancy Fee: Contact for Assessment",
    imageUrl: "/assets/services/srv-financial-struct.webp",
    contactMethod: "LINE",
    icon: "Shield",
    protocol: [
      {
        title: "Risk Diagnosis",
        description: "วิเคราะห์รอยโหว่ของประวัติทางการเงินและระบุจุดวิกฤตที่ต้องได้รับการแก้ไข",
      },
      {
        title: "Algorithm Alignment",
        description: "ปรับจูนยอดหมุนเวียนให้สอดคล้องกับตรรกะการตรวจจับของ AI ธนาคารสากล",
      },
      {
        title: "Integrity Deployment",
        description: "เริ่มกระบวนการจัดวางข้อมูลตามแผนยุทธศาสตร์เพื่อผลลัพธ์ที่ยั่งยืน",
      },
    ],
    features: [
      "Financial Logic Engineering",
      "Algorithm-Based Profiling",
      "Zero-Knowledge Asset Care",
    ],
  },
  {
    id: "SRV-IMM-01",
    slug: "lifestyle-mobility-independent-visa",
    category: "IMMIGRATION",
    name: "Visa & Mobility Strategy",
    title: "รับวางแผนเอกสารยื่นวีซ่าเคสยาก - แก้เคสวีซ่าไม่ผ่าน & จองตั๋วจริง PNR",
    tagline: "สร้างความน่าเชื่อถือให้โปรไฟล์การเดินทางของคุณ ผ่านระบบตรวจสอบสากล",
    description:
      "บริการแก้เคสวีซ่าเชงเก้น/อเมริกาไม่ผ่าน จัดเตรียมเอกสารรายได้ และจองตั๋วเครื่องบิน/โรงแรมรหัส PNR จริงที่ตรวจสอบได้ในฐานข้อมูลสายการบิน (GDS) 100%",
    timeline: "Processing: 24h - 10 Days",
    feeEstimate: "Strategic Rate: Applied by Case",
    imageUrl: "/assets/services/srv-gds-status.webp",
    contactMethod: "LINE",
    icon: "Globe",
    protocol: [
      {
        title: "System Injection",
        description: "จองผ่านระบบสากลเพื่อให้ชื่อของคุณขึ้นในฐานข้อมูลสายการบินและโรงแรมจริง",
      },
      {
        title: "Verification Audit",
        description: "ตรวจสอบความสมบูรณ์ของรหัส PNR และสถานะที่พักก่อนการเดินทางจริง",
      },
      {
        title: "Secure Issuance",
        description: "ส่งมอบแผนการเดินทางและเอกสารยืนยันสถานะที่ตรวจสอบได้จากทั่วโลก",
      },
    ],
    features: [
      "GDS Institutional Verification",
      "Real-time PNR Status",
      "Anti-Rejection Infrastructure",
    ],
  },
  {
    id: "SRV-DOC-01",
    slug: "physical-credential-logistics",
    category: "DOCUMENTATION",
    name: "Executive Document Assets",
    title: "รับทำใบรับรองเงินเดือนและเอกสารรายได้ - มาตรฐานตรวจสอบภายใน",
    tagline: "เอกสารรายได้ที่ทรงพลังและน่าเชื่อถือที่สุด ภายใต้ระบบความลับระดับสูงสุด",
    description:
      "รับร่างหนังสือรับรองเงินเดือน ใบสำคัญรับเงิน และ Identity Assets ระดับพรีเมียมที่สอดคล้องกับรายการเดินบัญชีจริง เพื่อใช้ประกอบการทำธุรกรรมทางการเงินทุกประเภท",
    timeline: "Production: 1 - 3 Days",
    feeEstimate: "Asset Value: Based on Specs",
    imageUrl: "/assets/services/srv-income-grid.webp",
    contactMethod: "LINE",
    icon: "FileText",
    protocol: [
      {
        title: "Asset Specifications",
        description: "กำหนดรายละเอียดความต้องการและระดับความสมจริงที่จำเป็นสำหรับเคสของคุณ",
      },
      {
        title: "Precision Execution",
        description: "เริ่มกระบวนการผลิตและตรวจสอบคุณภาพตามมาตรฐานสูงสุดของระบบ",
      },
      {
        title: "Secure Delivery",
        description: "ส่งมอบทรัพย์สินผ่านช่องทางที่มีความปลอดภัยและเป็นส่วนตัวสูงสุด",
      },
    ],
    features: ["High-Fidelity Assets", "Encrypted Logistics", "Zero-Trace Protocol"],
  },
];
