import fs from "fs";
import { NextRequest, NextResponse } from "next/server";
import path from "path";
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const filePath = path.join(process.cwd(), "database", "employee.json");
    const employees = JSON.parse(fs.readFileSync(filePath, "utf8"));
    const employee = employees.find((item: any) => item.id === +params.id);
    if (employee) {
      return NextResponse.json({employee});
    } else {
      return NextResponse.json({ message: "Không tìm thấy" });
    }
  } catch (error) {
    return NextResponse.json({ message: "Lỗi " });
  }
}
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const filePath = path.join(process.cwd(), "database", "employee.json");
    const employees = JSON.parse(fs.readFileSync(filePath, "utf8"));
    const findIndex = employees.findIndex(
      (item: any) => item.id === +params.id
    );
    if (findIndex !== -1) {
      const body = await request.json();
     employees[findIndex] = { ...employees[findIndex], ...body };

      fs.writeFileSync(filePath, JSON.stringify(employees), "utf8");

      return NextResponse.json({
        message: "Cập nhập thành công",
        updateProduct: employees[findIndex],
      });
    } else {
      return NextResponse.json({ message: "Không tìm thấysss" });
    }
  } catch (error) {
    return NextResponse.json({ message: "Lỗi " });
  }
}
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const filePath = path.join(process.cwd(), "database", "employee.json");

    const employees = JSON.parse(fs.readFileSync(filePath, "utf8"));

    const findIndex = employees.findIndex(
      (item: any) =>item.id === +params.id
    );
    if (findIndex !== -1) {
      const deleteEmployees =employees.splice(findIndex, 1);
      fs.writeFileSync(filePath, JSON.stringify(employees), "utf8");
      return NextResponse.json({employees:deleteEmployees,message:'xóa thành công'});
    } else {
      return NextResponse.json({ message: "Không tìm thấy" });
    }
  } catch (error) {
    return NextResponse.json({ message: "Lỗi" });
  }
}