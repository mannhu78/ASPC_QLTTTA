using Microsoft.AspNetCore.Mvc;
using MVC_Core_Quan_Ly_Trung_Tam_TA.DataBase;

namespace MVC_Core_Quan_Ly_Trung_Tam_TA.Models
{
    public class HocVienHelper
    {
        public List<HocVienModels> initHocVien()
        {
            var items = new List<HocVienModels>();
            for (int i = 0; i < 10; i++)
            {
                items.Add(new HocVienModels()
                {
                    MaHV = i,
                    TenHV = $"Nguyen Van {i}",
                    Gioitinh = "Nam",
                    DiaChi_id = i,
                    Diachi = $"Quan {i}, HCM",
                    Ngaysinh = new DateTime(1980, 01, 01)
                });
            }

            items = items.OrderByDescending(o => o.MaHV).ToList();
            return items;

        }

        public List<HocVien> getHocVienItems()
        {
            var items = new List<HocVien>();
            using (var db = new QLContext())
            {
                items = db.HocViens.ToList();
                return items;

            }


        }
    }
}
