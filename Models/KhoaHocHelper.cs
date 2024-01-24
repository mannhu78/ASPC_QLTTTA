using Microsoft.AspNetCore.Mvc;
using MVC_Core_Quan_Ly_Trung_Tam_TA.DataBase;

namespace MVC_Core_Quan_Ly_Trung_Tam_TA.Models
{
    public class KhoaHocHelper
    {
        public List<KhoaHoc> getKhoaHocItems()
        {
            var items = new List<KhoaHoc>();
            using (var db = new QLContext())
            {
                items = db.KhoaHocs.ToList();
                return items;

            }
        }
    }
}

