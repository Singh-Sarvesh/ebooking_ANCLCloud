using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace eBookingComplete.Controllers
{
    public class BookingReportController : Controller
    {
        // GET: PrintReport
        public ActionResult PrintReport()
        {
            return View();
        }
    }
}