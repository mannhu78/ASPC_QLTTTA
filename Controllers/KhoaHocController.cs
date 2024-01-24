using Microsoft.AspNetCore.Mvc;
using MVC_Core_Quan_Ly_Trung_Tam_TA.Models;

namespace MVC_Core_Quan_Ly_Trung_Tam_TA.Controllers
{
    public class KhoaHocController : Controller
    {
        public IActionResult KhoaHoc(int id)
        {
            var items = new KhoaHocHelper().getKhoaHocItems();
            return View(items);
        }
        public IActionResult ThemKhoaHoc(int id)
        {

            return View();
        }
    }
}
