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
    name: "ดูแลสเตทเม้นท์ (เดินบัญชี)",
    title: "ช่วยจัดระเบียบบัญชีธนาคารให้ดูดี... เพื่อโอกาสกู้ผ่านที่มากขึ้น",
    tagline: "ยอดเงินไม่นิ่ง บัญชีไม่สวย... เราช่วยวางแผนทางออกให้คุณได้",
    description:
      "เหมาะสำหรับพ่อค้าแม่ค้าออนไลน์หรือฟรีแลนซ์ที่ต้องการกู้บ้านหรือรถ แต่ติดปัญหาเรื่องการเดินบัญชี เราช่วยแนะนำการจัดระเบียบเงินเข้า-ออกให้ดูน่าเชื่อถือตามเกณฑ์ที่ธนาคารต้องการจริง",
    timeline: "3 - 7 วัน",
    feeEstimate: "ทักมาคุยกันก่อนครับ",
    imageUrl: "/assets/services/srv-financial-struct.webp",
    contactMethod: "LINE",
    icon: "Shield",
    protocol: [
      {
        title: "พูดคุยและวิเคราะห์เคส",
        description: "คุยกันตรงๆ ว่าติดปัญหาตรงไหน และเป้าหมายของคุณคืออะไร",
      },
      {
        title: "วางแผนการเดินบัญชี",
        description: "จัดโครงสร้างรายได้ให้ดูต่อเนื่องและสมเหตุสมผลสำหรับธนาคาร",
      },
      {
        title: "เตรียมความพร้อมก่อนยื่น",
        description: "เช็คความเรียบร้อยรอบสุดท้าย เพื่อความมั่นใจก่อนคุณลงสนามจริง",
      },
    ],
    features: ["แก้ปัญหากู้ไม่ผ่าน", "วางแผนเดินเงินรายเดือน", "พ่อค้าแม่ค้า/ฟรีแลนซ์"],
  },
  {
    id: "Financial-02",
    slug: "credit-leverage-infrastructure",
    category: "FINANCIAL",
    name: "ปั้นโปรไฟล์รายได้",
    title: "สร้างประวัติรายได้ให้ชัดเจน... เพื่อการกู้ยืมและเครดิตที่ดี",
    tagline: "ไม่มีสลิปเงินเดือน ไม่มีใบทะเบียนการค้า... ก็สร้างตัวตนทางการเงินได้",
    description:
      "ช่วยสร้างหลักฐานรายได้ที่จับต้องได้และน่าเชื่อถือ สำหรับคนที่ประกอบอาชีพอิสระแต่ต้องการยื่นกู้ในวงเงินสูงๆ เราช่วยปั้นโปรไฟล์ของคุณให้มีที่มาชัดเจนในสายตาผู้ตรวจสอบ",
    timeline: "2 - 4 สัปดาห์",
    feeEstimate: "ประเมินตามเคสครับ",
    imageUrl: "/assets/services/srv-credit-infra.webp",
    contactMethod: "LINE",
    icon: "Briefcase",
    protocol: [
      {
        title: "ประเมินโอกาสและความเป็นไปได้",
        description: "ตรวจสอบหน้างานและวางเป้าหมายรายได้ที่เหมาะสมกับอาชีพ",
      },
      {
        title: "สร้างระบบฐานข้อมูลรายได้",
        description: "จัดทำหลักฐานที่สอดคล้องกับพฤติกรรมการทำงานและการเงินจริง",
      },
      {
        title: "เตรียมตัวรับการตรวจสอบ",
        description: "แนะนำวิธีการตอบคำถามและเตรียมเอกสารประกอบให้ครบถ้วน",
      },
    ],
    features: ["กู้บ้าน/ธุรกิจ ไม่ใช้สลิป", "ปั้นเครดิตให้ดูแพง", "ที่ปรึกษาส่วนตัว"],
  },
  {
    id: "Doc-01",
    slug: "customized-income-documentation",
    category: "DOCUMENTATION",
    name: "จัดเตรียมเอกสารรับรอง",
    title: "รับเตรียมใบรับรองรายได้... ให้ดูเนียนและน่าเชื่อถือที่สุด",
    tagline: "ออกแบบเอกสารรับรองงานที่เข้ากับตัวคุณ... ยื่นที่ไหนก็สบายใจ",
    description:
      "รับร่างเอกสารรับรองการทำงานและรายได้ที่ออกแบบมาตามพฤติกรรมการใช้ชีวิตจริงของคุณ เน้นความเนียนของรูปแบบและตรรกะอาชีพที่สถานทูตหรือธนาคารยอมรับได้ง่าย",
    timeline: "1 - 2 วัน",
    feeEstimate: "ราคาเป็นกันเอง",
    imageUrl: "/assets/services/srv-income-grid.webp",
    contactMethod: "LINE",
    icon: "FileText",
    protocol: [
      {
        title: "เลือกอาชีพที่ใช่",
        description: "แนะนำอาชีพที่ดูสมเหตุสมผลกับไลฟ์สไตล์และเงินในบัญชีของคุณ",
      },
      {
        title: "ร่างเอกสารพรีเมียม",
        description: "ใช้ฟอนต์และรูปแบบมาตรฐานสากลที่ดูเป็นมืออาชีพที่สุด",
      },
      {
        title: "เช็คความถูกต้อง",
        description: "ตรวจสอบข้อมูลให้ตรงกับสเตทเม้นท์ เพื่อให้ไร้ที่ติ",
      },
    ],
    features: ["เน้นยื่นวีซ่า/กู้เงินผ่าน", "งานเนียน ดูมืออาชีพ", "รักษาความลับ 100%"],
  },
  {
    id: "SRV-DOC-02",
    slug: "physical-credential-logistics",
    category: "DOCUMENTATION",
    name: "พิมพ์บัตร PVC และ Smart Card (บัตรตามสั่ง)",
    title: "รับทำบัตรตามสั่ง - พิมพ์บัตร PVC/Smart Card ทุกรูปแบบ",
    tagline: "พิมพ์บัตรคุณภาพสูง... คมชัด สแกนติด ตามไฟล์งานของคุณ",
    description:
      "รับพิมพ์บัตรทุกประเภท ไม่ว่าจะเป็นบัตรสมาชิก บัตรพนักงาน หรือบัตรสมาร์ทการ์ดที่มีชิป/แถบแม่เหล็ก งานพิมพ์ความละเอียดสูง สีไม่ลอก รักษาความลับลูกค้า 100%",
    timeline: "1 - 3 วัน",
    feeEstimate: "ตามจำนวน",
    imageUrl: "/assets/services/srv-secure-transit.webp",
    contactMethod: "LINE",
    icon: "FileText",
    protocol: [
      { title: "รับแบบงาน", description: "รับไฟล์งานและข้อมูลที่คุณต้องการลงในบัตร" },
      { title: "ผลิตงานไว", description: "พิมพ์ด้วยเครื่องคุณภาพสูง สีเป๊ะ ทันใจ" },
      { title: "ทดสอบระบบ", description: "เช็คชิปและแถบแม่เหล็กว่าใช้งานได้จริงก่อนส่ง" },
    ],
    features: ["บัตรพนักงาน/สมาชิก", "บัตรชิป/แถบแม่เหล็ก", "ส่งด่วนทั่วไทย"],
  },
  {
    id: "SRV-DOC-03",
    slug: "universal-document-drafting-protocol",
    category: "DOCUMENTATION",
    name: "จัดร่างเอกสารตามแบบ (Drafting Protocol)",
    title: "รับทำร่างเอกสารทุกรูปแบบ - มีแบบมา เราจัดให้เป๊ะตามต้นฉบับ",
    tagline: "งานร่างเอกสารระดับพรีเมียม... เก็บทุกรายละเอียด ฟอนต์เป๊ะ ตราปั๊มชัด",
    description:
      "รับจัดร่างเอกสารทุกชนิดตามต้นฉบับที่คุณต้องการ เน้นความเป๊ะของเลย์เอาต์ ฟอนต์ และตราประทับ สำหรับคนที่มีแบบอยู่แล้วและต้องการงานที่เนียนที่สุดเพื่อความน่าเชื่อถือ",
    timeline: "1 - 2 วัน",
    feeEstimate: "ราคาตามความยาก",
    imageUrl: "/assets/services/srv-doc-protocol.webp",
    contactMethod: "LINE",
    icon: "FileText",
    protocol: [
      { title: "ส่งแบบงาน", description: "แจ้งประเภทเอกสารและส่งต้นฉบับที่คุณต้องการให้เราดู" },
      { title: "จัดทำร่าง", description: "ดำเนินการร่างเอกสารโดยอิงตามรูปแบบมาตรฐาน 100%" },
      { title: "ตรวจความเนียน", description: "เช็คความถูกต้องของทุกรายละเอียดก่อนส่งมอบ" },
    ],
    features: ["ร่างเอกสารทุกชนิด", "งานเนียนระดับสากล", "ความลับลูกค้าสูงสุด"],
  },
  {
    id: "SRV-IMM-01",
    slug: "flight-hotel-confirmed-status",
    category: "IMMIGRATION",
    name: "จองตั๋ว/โรงแรม ระบบ GDS (สถานะจริง 100%)",
    title: "GDS Reservation Protocol - ใบจองสถานะจริงในระบบสากล",
    tagline: "ใบจองที่สถานทูตเช็คได้จริงผ่านรหัส PNR... ไม่ใช่กระดาษจำลอง",
    description:
      "เราจองผ่านระบบ GDS (Global Distribution System) ซึ่งเป็นระบบเดียวกับที่สายการบินและสถานทูตใช้ตรวจสอบ ชื่อของคุณจะปรากฏในระบบจริงตลอดช่วงการพิจารณาวีซ่า ลดความเสี่ยงโดนปฏิเสธวีซ่า 100%",
    timeline: "ไม่เกิน 6 ชม.",
    feeEstimate: "ราคามาตรฐาน",
    imageUrl: "/assets/services/srv-gds-status.webp",
    contactMethod: "LINE",
    icon: "Globe",
    protocol: [
      { title: "GDS Injection", description: "ลงทะเบียนจองจริงในระบบสำรองที่นั่งสากล" },
      { title: "Status Check", description: "ยืนยันรหัส PNR บนหน้าเว็บสายการบินโดยตรง" },
      { title: "Document Issue", description: "ส่งมอบใบจองที่เป็นสถานะ 'Confirmed' จริง" },
    ],
    features: ["รหัส PNR เช็คได้จริง", "สถานทูตยอมรับ 100%", "ใบจองโรงแรมสากล"],
  },
  {
    id: "SRV-IMM-02",
    slug: "lifestyle-mobility-independent-visa",
    category: "IMMIGRATION",
    name: "แก้เคสวีซ่าอาชีพอิสระ (Independent Visa)",
    title: "Immigration Profile Profiling - ปั้นโปรไฟล์ยื่นวีซ่าเคสยาก",
    tagline: "ช่วยสาวทำงานอิสระและฟรีแลนซ์... ให้ไปต่างประเทศได้แบบสบายใจ",
    description:
      "เชี่ยวชาญการดูแลเคส 'อาชีพไม่ชัดเจน' หรือไม่มีใบรับรองงานบริษัท เราจะปั้นโปรไฟล์และวางแผนการเดินทางของคุณให้ดูน่าเชื่อถือในสายตาสถานทูต อุดรอยโหว่เรื่องที่มาเงินและการกลับไทย",
    timeline: "ตามประเภทเคส",
    feeEstimate: "ประเมินส่วนตัว",
    imageUrl: "/assets/services/srv-elite-freedom.webp",
    contactMethod: "LINE",
    icon: "Globe",
    protocol: [
      { title: "Logic Design", description: "สร้างตรรกะการทำงานและรายได้ให้ดูสมเหตุสมผล" },
      { title: "Itinerary Fix", description: "ออกแบบแผนเที่ยวที่มีจุดประสงค์ชัดเจนและน่าเชื่อถือ" },
      { title: "Interview Prep", description: "เตรียมคำตอบให้สอดคล้องกับโปรไฟล์ใหม่ที่วางไว้" },
    ],
    features: ["สาวอาชีพอิสระ", "แก้เคสเคยถูกปฏิเสธ", "วางแผนการเดินทาง"],
  },
  {
    id: "SRV-SYS-01",
    slug: "complete-profile-infrastructure",
    category: "SYSTEMS",
    name: "ดูแลโปรไฟล์การเงินรายเดือน (Profile Care)",
    title: "ดูแลโปรไฟล์ - บริการวางระบบความน่าเชื่อถือให้คุณถาวร",
    tagline: "สร้างรากฐานให้ตัวคุณดูดีในระบบแบงค์... เพื่อโอกาสกู้และยื่นวีซ่าใหญ่ในอนาคต",
    description:
      "เหมาะสำหรับคนมองการณ์ไกล เราช่วยคุมยอดเงิน เดินบัญชี และจัดระเบียบเอกสารรายเดือนให้คุณต่อเนื่อง เพื่อให้โปรไฟล์ของคุณ 'Audit-Ready' พร้อมใช้งานยื่นวีซ่าหรือกู้เงินได้ตลอดเวลา",
    timeline: "รายเดือน",
    feeEstimate: "ค่าบริการรายเดือน",
    imageUrl: "/assets/services/srv-identity-map.webp",
    contactMethod: "LINE",
    icon: "Shield",
    protocol: [
      { title: "History Audit", description: "เช็คประวัติเก่าและวางทางแก้แบบยั่งยืน" },
      { title: "Monthly Care", description: "ดูแลการเดินบัญชีให้สวยงามสม่ำเสมอทุกเดือน" },
      { title: "Ready-to-use", description: "เช็คความสมบูรณ์ทุกครั้งก่อนเริ่มงานใหญ่" },
    ],
    features: ["ที่ปรึกษาส่วนตัว", "คุมบัญชีรายเดือน", "สร้างความน่าเชื่อถือถาวร"],
  },
];
