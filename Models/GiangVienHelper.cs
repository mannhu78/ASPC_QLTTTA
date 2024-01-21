using Microsoft.AspNetCore.Mvc;
using MVC_Core_Quan_Ly_Trung_Tam_TA.DataBase;

namespace MVC_Core_Quan_Ly_Trung_Tam_TA.Models
{
    public class GiangVienHelper 
    {
        public List<GiangVienModels> initGiangVien()
        {
            var items = new List<GiangVienModels>();
            for (int i = 0; i < 10; i++)
            {
                items.Add(new GiangVienModels()
                {
                    MaGV = i,
                    TenGV = $"Nguyen Van {i}",
                    Gioitinh = "Nam",
                    DiaChi_id = i,
                    Diachi = $"Quan {i}, HCM",
                    Ngaysinh = new DateTime(1980, 01, 01)
                });
            }

            items = items.OrderByDescending(o => o.MaGV).ToList();
            return items;

        }

        public List<DGiangVien> getGiangVientItems()
        {
            var items = new List<DGiangVien>();
            using (var db = new QLContext()){ 
                items = db.DGiangViens.ToList();
                return items;
            
            }
          

        }
    }
}
