import fs from "fs";
import { NextRequest, NextResponse } from "next/server";
import path from "path";
export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "database", "employee.json");
    const data = fs.readFileSync(filePath, "utf8");
    const employees = JSON.parse(data);
    return NextResponse.json(employees);
  } catch (error) {
    return NextResponse.json({ message: "Lỗi" });
  }
}
export async function POST(request: NextRequest, response: NextResponse) {
  try {
    const adminRequest = await request.json();
    const filePath = path.join(process.cwd(), "database", "employee.json");
    const employees = JSON.parse(fs.readFileSync(filePath, "utf8"));
    employees.push(adminRequest);
    fs.writeFileSync(filePath, JSON.stringify(employees), "utf8");
    return NextResponse.json({ message: "Thêm mới thành công" });
  } catch (error) {
    return NextResponse.json({ message: "Lỗi rồi" });
  }
}