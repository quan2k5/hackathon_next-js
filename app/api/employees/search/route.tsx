import fs from "fs";
import path from "path";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const url = new URL(request.url);
    const name = url.searchParams.get("email")?.toLowerCase();
    if (!name) {
      return NextResponse.json({ message: "Nhap ten nguoi dung" });
    }
    const filePath = path.join(process.cwd(), "database", "employee.json");
    const employees = JSON.parse(fs.readFileSync(filePath, "utf8"));
    const filteredEmployees = employees.filter((item: any) =>
      item.email.toLowerCase().includes(name)
    );
    if (filteredEmployees.length > 0) {
      return NextResponse.json({ employees: filteredEmployees });
    } else {
      return NextResponse.json({ message: "Không tìm thấy" });
    }
  } catch (error) {
    return NextResponse.json({ message: "Lỗi" });
  }
}