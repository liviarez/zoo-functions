const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Teste da função averageAge, é esperado que ela retorna média de idade dos elefantes', () => {
    const averageElephantAge = 10.5;
    const resultFromFunction = handlerElephants('averageAge');
    expect(averageElephantAge).toBe(resultFromFunction);
  });

  it('Teste da função computeData, é esperado que ela retorna a quantidade dos elefantes', () => {
    const countElephants = 4;
    const resultFromCompute = handlerElephants('count');
    expect(countElephants).toBe(resultFromCompute);
  });
  it('Teste da função computeData, é esperado que ela retorna o nome dos elefantes', () => {
    const resultFromCompute = handlerElephants('names');
    expect(resultFromCompute).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });

  it('Teste da função computeData, é esperado que ela retorne null caso não exista parâmetro', () => {
    const resultFromCompute = handlerElephants();
    expect(resultFromCompute).toEqual(null);
  });

  it('Teste da função handlerElephants, é esperado que ela retorne undifined caso não receba nenhum parâmetro', () => {
    const resultFromCompute = handlerElephants(undefined);
    expect(resultFromCompute).toEqual(undefined);
  });

  it('Teste da função handlerElephants, é esperado que ela retorne parametro inválido caso não receba uma string', () => {
    const resultFromCompute = handlerElephants(0);
    expect(resultFromCompute).toEqual('Parâmetro inválido, é necessário uma string');
  });

  it('Teste da função handlerElephants, é esperado que ela retorne a informação de acordo com o parâmetro', () => {
    const resultFromName = handlerElephants('name');
    expect(resultFromName).toEqual('elephants');
    const resultFromPopularity = handlerElephants('popularity');
    expect(resultFromPopularity).toEqual(5);
    const resultFromLocation = handlerElephants('location');
    expect(resultFromLocation).toEqual('NW');
  });
});
