using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MVC_Core_Quan_Ly_Trung_Tam_TA.Models;

namespace MVC_Core_Quan_Ly_Trung_Tam_TA.Controllers
{
    public class GiangVienController : Controller
    {
      /*
        public IActionResult _GiangVien(int id)
        {
            var GiangVienHelper = new GiangVienHelper();
            List<GiangVienModels> dataItems = new List<GiangVienModels>();
            if (id == 0)
                dataItems = GiangVienHelper.initGiangVien();
            else
                dataItems = GiangVienHelper.getGiangVientItem(id);

            return View(dataItems);
        }
       */
        public IActionResult GiangVien(int id)
        {
           var items = new GiangVienHelper().getGiangVientItems() ;
            return View(items);
        }
        public IActionResult _ThemGiangVien(int id)
        {

            return View();
        }

    }
}
