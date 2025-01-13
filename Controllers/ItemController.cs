using InventarioAvemrSqlite.Data;
using InventarioAvemrSqlite.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using SQLitePCL;

namespace InventarioAvemrSqlite.Controllers
{
    public class ItemController : Controller
    {
        private readonly ApplicationDbContext _context;

        public ItemController(ApplicationDbContext context)
        {
            _context = context;
        }
        public async Task<IActionResult> Index()
        {
            var item = await _context.Items.ToListAsync();
            return View(item);
        }

        public IActionResult AddItem()
        {
            return View();
        }
        //Create item
        public async Task<IActionResult> Create(Item item)
        {
            var item1 = item;
            await _context.Items.AddAsync(item1);
            await _context.SaveChangesAsync();
            
            return RedirectToAction("Index");
        }

        //Delete item
        public async Task<IActionResult> DeleteItem(int id)
        {
            var item = _context.Items.Find(id);
            _context.Items.Remove(item);
            await _context.SaveChangesAsync();

            return RedirectToAction("Index");

        }
    }
}
