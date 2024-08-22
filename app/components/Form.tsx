import React from 'react'

export default function Form() {
  return (
    <form className="max-w-md mx-auto mt-8 p-4 bg-white shadow-md rounded">
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="employeeName">
        Tên nhân viên
      </label>
      <input
        className="w-full px-3 py-2 border rounded"
        id="employeeName"
        type="text"
        placeholder="Tên nhân viên"
      />
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dateOfBirth">
        Ngày sinh
      </label>
      <input
        className="w-full px-3 py-2 border rounded"
        id="dateOfBirth"
        type="text"
        placeholder="mm/dd/yyyy"
      />
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
        Hình ảnh
      </label>
      <input
        className="w-full px-3 py-2 border rounded"
        id="image"
        type="text"
        placeholder="Link hình ảnh"
      />
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
        Email
      </label>
      <input
        className="w-full px-3 py-2 border rounded"
        id="email"
        type="email"
        placeholder="Email"
      />
    </div>
    <button className="w-full bg-blue-500 text-white py-2 rounded">Thêm</button>
  </form>
  )
}
