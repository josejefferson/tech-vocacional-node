const DecisionTree = require('decision-tree')

function realizar_teste(test_data) {
  const dict = {
    npouco: 1,
    upouco: 2,
    razoavelmente: 3,
    gosto: 4,
    adoro: 5,
    pessima: 6,
    ruim: 7,
    mediana: 8,
    boa: 9,
    otima: 10,
    liderar: 11,
    pesquisa: 12,
    apresentar: 13,
    estilizar: 14,
    grafico: 15,
    enigma: 16,
    resumo: 17,
    pintar: 18
  }

  //   perfil = [
  //     [dict['razoavelmente'], dict['ruim'], dict['mediana'], dict['pesquisa'], dict['enigma']],
  //     [dict['gosto'], dict['pessima'], dict['ruim'], dict['pesquisa'], dict['enigma']],
  //     [dict['adoro'], dict['mediana'], dict['pessima'], dict['apresentar'], dict['enigma']],
  //     [dict['upouco'], dict['otima'], dict['ruim'], dict['estilizar'], dict['pintar']],
  //     [dict['razoavelmente'], dict['boa'], dict['pessima'], dict['estilizar'], dict['pintar']],
  //     [dict['razoavelmente'], dict['otima'], dict['mediana'], dict['estilizar'], dict['pintar']],
  //     [dict['razoavelmente'], dict['otima'], dict['ruim'], dict['estilizar'], dict['enigma']],
  //     [dict['gosto'], dict['boa'], dict['mediana'], dict['pesquisa'], dict['pintar']],
  //     [dict['adoro'], dict['otima'], dict['mediana'], dict['pesquisa'], dict['enigma']],
  //     [dict['razoavelmente'], dict['mediana'], dict['mediana'], dict['pesquisa'], dict['grafico']],
  //     [dict['upouco'], dict['ruim'], dict['ruim'], dict['pesquisa'], dict['grafico']],
  //     [dict['adoro'], dict['mediana'], dict['pessima'], dict['apresentar'], dict['grafico']],
  //     [dict['razoavelmente'], dict['mediana'], dict['boa'], dict['pesquisa'], dict['resumo']],
  //     [dict['upouco'], dict['ruim'], dict['otima'], dict['pesquisa'], dict['grafico']],
  //     [dict['npouco'], dict['mediana'], dict['otima'], dict['apresentar'], dict['resumo']],
  //     [dict['razoavelmente'], dict['mediana'], dict['razoavelmente'], dict['liderar'], dict['enigma']],
  //     [dict['boa'], dict['ruim'], dict['ruim'], dict['liderar'], dict['resumo']],
  //     [dict['upouco'], dict['pessima'], dict['boa'], dict['liderar'], dict['grafico']]
  //   ]

  const perfil = [
    {
      rotulo: 'Desenvolvedor Back-end',
      0: dict['razoavelmente'],
      1: dict['ruim'],
      2: dict['mediana'],
      3: dict['pesquisa'],
      4: dict['enigma']
    },
    {
      rotulo: 'Desenvolvedor Back-end',
      0: dict['gosto'],
      1: dict['pessima'],
      2: dict['ruim'],
      3: dict['pesquisa'],
      4: dict['enigma']
    },
    {
      rotulo: 'Desenvolvedor Back-end',
      0: dict['adoro'],
      1: dict['mediana'],
      2: dict['pessima'],
      3: dict['apresentar'],
      4: dict['enigma']
    },
    {
      rotulo: 'Desenvolvedor Front-end',
      0: dict['upouco'],
      1: dict['otima'],
      2: dict['ruim'],
      3: dict['estilizar'],
      4: dict['pintar']
    },
    {
      rotulo: 'Desenvolvedor Front-end',
      0: dict['razoavelmente'],
      1: dict['boa'],
      2: dict['pessima'],
      3: dict['estilizar'],
      4: dict['pintar']
    },
    {
      rotulo: 'Desenvolvedor Front-end',
      0: dict['razoavelmente'],
      1: dict['otima'],
      2: dict['mediana'],
      3: dict['estilizar'],
      4: dict['pintar']
    },
    {
      rotulo: 'Desenvolvedor Fullstack',
      0: dict['razoavelmente'],
      1: dict['otima'],
      2: dict['ruim'],
      3: dict['estilizar'],
      4: dict['enigma']
    },
    {
      rotulo: 'Desenvolvedor Fullstack',
      0: dict['gosto'],
      1: dict['boa'],
      2: dict['mediana'],
      3: dict['pesquisa'],
      4: dict['pintar']
    },
    {
      rotulo: 'Desenvolvedor Fullstack',
      0: dict['adoro'],
      1: dict['otima'],
      2: dict['mediana'],
      3: dict['pesquisa'],
      4: dict['enigma']
    },
    {
      rotulo: 'Profissional de Dados',
      0: dict['razoavelmente'],
      1: dict['mediana'],
      2: dict['mediana'],
      3: dict['pesquisa'],
      4: dict['grafico']
    },
    {
      rotulo: 'Profissional de Dados',
      0: dict['upouco'],
      1: dict['ruim'],
      2: dict['ruim'],
      3: dict['pesquisa'],
      4: dict['grafico']
    },
    {
      rotulo: 'Profissional de Dados',
      0: dict['adoro'],
      1: dict['mediana'],
      2: dict['pessima'],
      3: dict['apresentar'],
      4: dict['grafico']
    },
    {
      rotulo: 'Analista de Sistemas',
      0: dict['razoavelmente'],
      1: dict['mediana'],
      2: dict['boa'],
      3: dict['pesquisa'],
      4: dict['resumo']
    },
    {
      rotulo: 'Analista de Sistemas',
      0: dict['upouco'],
      1: dict['ruim'],
      2: dict['otima'],
      3: dict['pesquisa'],
      4: dict['grafico']
    },
    {
      rotulo: 'Analista de Sistemas',
      0: dict['npouco'],
      1: dict['mediana'],
      2: dict['otima'],
      3: dict['apresentar'],
      4: dict['resumo']
    },
    {
      rotulo: 'Engenheiro de Software',
      0: dict['razoavelmente'],
      1: dict['mediana'],
      2: dict['razoavelmente'],
      3: dict['liderar'],
      4: dict['enigma']
    },
    {
      rotulo: 'Engenheiro de Software',
      0: dict['boa'],
      1: dict['ruim'],
      2: dict['ruim'],
      3: dict['liderar'],
      4: dict['resumo']
    },
    {
      rotulo: 'Engenheiro de Software',
      0: dict['upouco'],
      1: dict['pessima'],
      2: dict['boa'],
      3: dict['liderar'],
      4: dict['grafico']
    }
  ]

  const features = [0, 1, 2, 3, 4]
  const classificador = new DecisionTree(perfil, 'rotulo', features)
  const resultado = classificador.predict({
    0: dict[test_data[0]],
    1: dict[test_data[1]],
    2: dict[test_data[2]],
    3: dict[test_data[3]],
    4: dict[test_data[4]]
  })

  return resultado
}

module.exports = realizar_teste
