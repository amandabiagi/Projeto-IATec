using CarrosAPI.Modals;
using Microsoft.AspNetCore.Mvc;
using System.Linq;
using CarrosAPI.Data;
using AutoMapper;
using CarrosAPI.Data.DTO;
using System.Collections.Generic;

namespace CarrosAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CarroController : ControllerBase
    {
        private CarroContext carroContext;
        private IMapper mapper;

        public CarroController(CarroContext context, IMapper mapper)
        {
            carroContext = context;
            this.mapper = mapper;
        }
              


        [HttpPost]
        public IActionResult AdicionaCarro([FromBody] CreateCarroDto carroDto)
        {
            Carro carro = mapper.Map<Carro>(carroDto);

            carroContext.Carros.Add(carro);
            carroContext.SaveChanges(); //Para salvar no banco de dados
            return CreatedAtAction(nameof(ExibirCarroPorId), new { Id = carro.Id }, carro);           
       
        }

        [HttpGet]
        public IActionResult ExibirCarros()
        {    
         

            return Ok(carroContext.Carros);            
        }

        [HttpGet("{modelo}")]
        public IActionResult ExibirCarroPorModelo(string modelo)
        {
            
            List<Carro> carros = new List<Carro>();

            carros = carroContext.Carros.Where(c => c.Modelo == modelo).ToList();


            if (carros.Any())
            {
                return Ok(carros);
            }
            return NotFound();
        }

        [HttpGet("id/{id}")]
        public IActionResult ExibirCarroPorId(int id)
        {

            Carro carro = carroContext.Carros.FirstOrDefault(carro => carro.Id == id); //Traz o primeiro encontrado ou traz nulo
            if (carro != null)
            {
                ReadCarroDto carroDto = mapper.Map<ReadCarroDto>(carro);
                return Ok(carro);
            }
            return NotFound();
        }



        [HttpPut("{id}")]
        public IActionResult AtualizarCarroPorId(int id, [FromBody] UpdateCarroDto carroDto)
        {

            Carro carro = carroContext.Carros.FirstOrDefault(carro => carro.Id == id); //Traz o primeiro encontrado ou traz nulo
            if (carro != null)
            {

                mapper.Map(carroDto, carro);
                carroContext.SaveChanges(); 

                return Ok(carro);
            }
            return NotFound();
        }

        [HttpDelete("{id}")]
        public IActionResult DeletarCarroPorId(int id)
        {

            Carro carro = carroContext.Carros.FirstOrDefault(carro => carro.Id == id); //Traz o primeiro encontrado ou traz nulo
            if (carro != null)
            {
                carroContext.Remove(carro);
                carroContext.SaveChanges();


                return Ok();
            }
            return NotFound();
        }


    }
}
