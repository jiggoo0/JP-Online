/**
 * @TYPES: Smart Qualification Tool (Eligibility System)
 */

export type TargetCountry = "TH" | "MY" | "AE" | "KR";

export type EducationLevel = "HIGH_SCHOOL" | "DIPLOMA" | "DEGREE" | "MASTER_PLUS";

export type EligibilityStatus =
  | "OPTIMAL" // โปรไฟล์สมบูรณ์แบบ ผ่านการตรวจสอบ 100%
  | "ACTION_REQUIRED" // ต้องมีการปรับจูนเอกสารหรือโปรไฟล์เพิ่มเติม
  | "CRITICAL_GAP" // มีรอยโหว่ร้ายแรง ต้องใช้กลยุทธ์ Survival Tactics
  | "SYSTEM_REJECTION"; // ถูกปฏิเสธจากระบบปกติ (ต้องการการแก้ไขประวัติ)

export interface ClientProfile {
  targetCountry: TargetCountry;
  currentIncome: number; // monthly income in local or target currency (standardized to USD/THB in logic)
  educationLevel: EducationLevel;
  workExperienceYears: number;
  hasPreviousRejection: boolean;
  notes?: string;
}

export interface EligibilityResult {
  status: EligibilityStatus;
  score: number; // 0-100 (Overall Integrity Score)
  analysis: string; // การวิเคราะห์เชิงกลยุทธ์ (Enforcer Context)
  recoveryStrategy: string[]; // แนวทางแก้ไขเชิงเทคนิค
  recommendedServiceId: string; // ลิงก์ไปยังบริการที่เหมาะสมที่สุด
}
