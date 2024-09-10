<script setup>
import {
  IHeader,
  IFooter,
  ISectionMultiCard2Ads,
  IHeaderNav,
  ISectionNews,
  INewsTickerContainer,
  ISection_3Cards,
  ISectionMultiCard1Ads,
  ISection3CardsDivider,
  ITest
} from './components'
import { VApp } from 'vuetify/lib/components/index.mjs'

const noticias = {
  cards: [
    {
      src: 'https://phantom-marca-mx.unidadeditorial.es/c4afd6b4b39fb965cb1f2ac0a055fb34/resize/660/f/webp/mx/assets/multimedia/imagenes/2024/09/10/17259698679900.jpg',
      title:
        'Fernando Alonso sueña con el nuevo Aston Martin con Adrian Newey: "El equipo del futuro',
      subtitle: 'F1',
      text: 'FABIAN TORRES'
    },
    {
      src: 'https://phantom-marca-mx.unidadeditorial.es/0cc32eb544df5ab689d9370643dac8fb/resize/143/f/webp/mx/assets/multimedia/imagenes/2024/09/10/17259383616425.jpg',
      title:
        'Conoce al México FC, equipo que milita en España con jugadores Liga MX y Liga de Expansión',
      subtitle: 'Mexicanos por el mundo',
      text: 'LW'
    },
    {
      src: 'https://phantom-marca-mx.unidadeditorial.es/a3eb8cab9beb48341484c348cfe7dc04/resize/990/f/webp/mx/assets/multimedia/imagenes/2024/09/10/17259442697899.jpg',
      title:
        'El Punto G de la Selección Mexicana: Vasco Aguirre ríe con el "Gustar, ganar, golear... y gozar"',
      subtitle: 'Selección Nacional de México',
      text: 'LW'
    },
    {
      src: 'https://phantom-marca-mx.unidadeditorial.es/c16b5a5072d9bf7da20cf0f1d110fa40/resize/990/f/webp/mx/assets/multimedia/imagenes/2024/09/10/17259282851092.jpg',
      title: 'México vs Canadá: Javier Aguirre confirma a Malagón y Chino Huerta titulares',
      subtitle: 'Selección Nacional de México',
      text: 'LW'
    },
    {
      src: 'https://phantom-marca-mx.unidadeditorial.es/9e018e9db5b07421ba46e0d583dd02c3/resize/660/f/webp/mx/assets/multimedia/imagenes/2024/09/09/17259175001504.jpg',
      title:
        '¡Todo por ambiciosos, Checo! Christian Horner reconoce su falla en Red Bull: "Fuimos demasiado lejos"',
      subtitle: 'F1',
      text: 'Angel Huguez'
    },
    {
      src: 'https://phantom-marca-mx.unidadeditorial.es/4cf3187cf643bb608a0e75f968e0ba81/resize/660/f/webp/mx/assets/multimedia/imagenes/2024/09/10/17259241897868.jpg',
      title:
        'Liga MX exporta a César Arturo Ramos a Japón y a Jordan Silva a Grecia como rival de Orbelín Pineda',
      subtitle: 'Mexicanos por el mundo',
      text: 'LW'
    },
    {
      src: 'https://phantom-marca-mx.unidadeditorial.es/42aee1dd27f8b09c6b6f0aa2ddd9f15d/resize/660/f/webp/mx/assets/multimedia/imagenes/2024/09/10/17259343402143.jpg',
      title:
        'Jorge Campos apunta contra Liga MX y la Selección de México: "Llevamos 15 o 20 años mal"',
      subtitle: 'Liga MX 2024',
      text: 'Eduardo Avila'
    },
    {
      src: 'https://phantom-marca-mx.unidadeditorial.es/03cc622be2f9eb724a88ea9efcbef225/resize/660/f/webp/mx/assets/multimedia/imagenes/2024/09/10/17259397119555.jpg',
      title:
        'Once titular de México vs Canadá: Javier Aguirre, sin Quiñones, pero con chances de oro a Malagón y Chino Huerta',
      subtitle: 'Selección Nacional de México',
      text: 'Eduardo Avila'
    }
  ],
  cards2: [
    {
      src: 'https://phantom-marca-mx.unidadeditorial.es/c4afd6b4b39fb965cb1f2ac0a055fb34/resize/660/f/webp/mx/assets/multimedia/imagenes/2024/09/10/17259698679900.jpg',
      title:
        'Fernando Alonso sueña con el nuevo Aston Martin con Adrian Newey: "El equipo del futuro',
      subtitle: 'F1',
      text: 'FABIAN TORRES'
    },
    {
      src: 'https://phantom-marca-mx.unidadeditorial.es/0cc32eb544df5ab689d9370643dac8fb/resize/143/f/webp/mx/assets/multimedia/imagenes/2024/09/10/17259383616425.jpg',
      title:
        'Conoce al México FC, equipo que milita en España con jugadores Liga MX y Liga de Expansión',
      subtitle: 'Mexicanos por el mundo',
      text: 'LW'
    },
    {
      src: 'https://phantom-marca-mx.unidadeditorial.es/a3eb8cab9beb48341484c348cfe7dc04/resize/990/f/webp/mx/assets/multimedia/imagenes/2024/09/10/17259442697899.jpg',
      title:
        'El Punto G de la Selección Mexicana: Vasco Aguirre ríe con el "Gustar, ganar, golear... y gozar"',
      subtitle: 'Selección Nacional de México',
      text: 'LW'
    },
    {
      src: 'https://phantom-marca-mx.unidadeditorial.es/c16b5a5072d9bf7da20cf0f1d110fa40/resize/990/f/webp/mx/assets/multimedia/imagenes/2024/09/10/17259282851092.jpg',
      title: 'México vs Canadá: Javier Aguirre confirma a Malagón y Chino Huerta titulares',
      subtitle: 'Selección Nacional de México',
      text: 'LW'
    },
    {
      src: 'https://phantom-marca-mx.unidadeditorial.es/9e018e9db5b07421ba46e0d583dd02c3/resize/660/f/webp/mx/assets/multimedia/imagenes/2024/09/09/17259175001504.jpg',
      title:
        '¡Todo por ambiciosos, Checo! Christian Horner reconoce su falla en Red Bull: "Fuimos demasiado lejos"',
      subtitle: 'F1',
      text: 'Angel Huguez'
    },
    {
      src: 'https://phantom-marca-mx.unidadeditorial.es/4cf3187cf643bb608a0e75f968e0ba81/resize/660/f/webp/mx/assets/multimedia/imagenes/2024/09/10/17259241897868.jpg',
      title:
        'Liga MX exporta a César Arturo Ramos a Japón y a Jordan Silva a Grecia como rival de Orbelín Pineda',
      subtitle: 'Mexicanos por el mundo',
      text: 'LW'
    }
  ],
  cards3: [
    {
      src: 'https://phantom-marca-mx.unidadeditorial.es/c4afd6b4b39fb965cb1f2ac0a055fb34/resize/660/f/webp/mx/assets/multimedia/imagenes/2024/09/10/17259698679900.jpg',
      title:
        'Fernando Alonso sueña con el nuevo Aston Martin con Adrian Newey: "El equipo del futuro',
      subtitle: 'F1',
      text: 'FABIAN TORRES'
    },
    {
      src: 'https://phantom-marca-mx.unidadeditorial.es/0cc32eb544df5ab689d9370643dac8fb/resize/143/f/webp/mx/assets/multimedia/imagenes/2024/09/10/17259383616425.jpg',
      title:
        'Conoce al México FC, equipo que milita en España con jugadores Liga MX y Liga de Expansión',
      subtitle: 'Mexicanos por el mundo',
      text: 'LW'
    },
    {
      src: 'https://phantom-marca-mx.unidadeditorial.es/a3eb8cab9beb48341484c348cfe7dc04/resize/990/f/webp/mx/assets/multimedia/imagenes/2024/09/10/17259442697899.jpg',
      title:
        'El Punto G de la Selección Mexicana: Vasco Aguirre ríe con el "Gustar, ganar, golear... y gozar"',
      subtitle: 'Selección Nacional de México',
      text: 'LW'
    },
    {
      src: 'https://phantom-marca-mx.unidadeditorial.es/c16b5a5072d9bf7da20cf0f1d110fa40/resize/990/f/webp/mx/assets/multimedia/imagenes/2024/09/10/17259282851092.jpg',
      title: 'México vs Canadá: Javier Aguirre confirma a Malagón y Chino Huerta titulares',
      subtitle: 'Selección Nacional de México',
      text: 'LW'
    },
    {
      src: 'https://phantom-marca-mx.unidadeditorial.es/9e018e9db5b07421ba46e0d583dd02c3/resize/660/f/webp/mx/assets/multimedia/imagenes/2024/09/09/17259175001504.jpg',
      title:
        '¡Todo por ambiciosos, Checo! Christian Horner reconoce su falla en Red Bull: "Fuimos demasiado lejos"',
      subtitle: 'F1',
      text: 'Angel Huguez'
    },
    {
      src: 'https://phantom-marca-mx.unidadeditorial.es/11fe63509d6f5d4597acb6cff064d6fa/resize/660/f/webp/mx/assets/multimedia/imagenes/2024/09/09/17258934865479.jpg',
      subtitle: 'F1',
      title: 'Audi da otro golpe a Red Bull y Checo Pérez y se lleva a unos de sus ingenieros',
      text: 'Angel Huguez'
    }
  ],
  cardsSection3: [
    {
      src: 'https://phantom-marca-mx.unidadeditorial.es/c4afd6b4b39fb965cb1f2ac0a055fb34/resize/660/f/webp/mx/assets/multimedia/imagenes/2024/09/10/17259698679900.jpg',
      title:
        'Fernando Alonso sueña con el nuevo Aston Martin con Adrian Newey: "El equipo del futuro',
      subtitle: 'F1',
      text: 'FABIAN TORRES'
    },
    {
      src: 'https://phantom-marca-mx.unidadeditorial.es/0cc32eb544df5ab689d9370643dac8fb/resize/143/f/webp/mx/assets/multimedia/imagenes/2024/09/10/17259383616425.jpg',
      title:
        'Conoce al México FC, equipo que milita en España con jugadores Liga MX y Liga de Expansión',
      subtitle: 'Mexicanos por el mundo',
      text: 'LW'
    },
    {
      src: 'https://phantom-marca-mx.unidadeditorial.es/a3eb8cab9beb48341484c348cfe7dc04/resize/990/f/webp/mx/assets/multimedia/imagenes/2024/09/10/17259442697899.jpg',
      title:
        'El Punto G de la Selección Mexicana: Vasco Aguirre ríe con el "Gustar, ganar, golear... y gozar"',
      subtitle: 'Selección Nacional de México',
      text: 'LW'
    }
  ]
}

const newsItems = {
  news: [
    {
      category: 'Liga ',
      title:
        'Resultados Liga MX Femenil 2024: tabla de posiciones tras la Jornada 9 y calendario Fecha 10',
      image:
        'https://phantom-marca-mx.unidadeditorial.es/58f039408693875d54baf3f8f1f057bb/resize/660/f/webp/mx/assets/multimedia/imagenes/2024/09/10/17259314440627.jpg'
    },
    {
      category: 'Actualidad',
      title:
        '¿Cuándo es el Simulacro Nacional de septiembre 2024? A qué hora sonará la alarma sísmica',
      image:
        'https://phantom-marca-mx.unidadeditorial.es/ca569ed15ecb9476fa77a80ff4b67019/resize/660/f/webp/mx/assets/multimedia/imagenes/2024/09/09/17259173070329.jpg'
    },
    {
      category: 'NFL',
      title:
        'Resultados de la NFL 2024 S1: posiciones del futbol americano tras el Monday Night Football',
      image:
        'https://phantom-marca-mx.unidadeditorial.es/8f58e9f7b1478da781114c287b85cd80/resize/660/f/webp/mx/assets/multimedia/imagenes/2024/09/10/17259387389663.jpg'
    },
    {
      category: 'F1',
      title: 'Audi da otro golpe a Red Bull y Checo Pérez y se lleva a unos de sus ingenieros',
      image:
        'https://phantom-marca-mx.unidadeditorial.es/11fe63509d6f5d4597acb6cff064d6fa/resize/660/f/webp/mx/assets/multimedia/imagenes/2024/09/09/17258934865479.jpg'
    },
    {
      category: 'Futbol',
      title: 'Así está el balance en gasto de fichajes desde hace 10 años',
      image:
        'https://phantom-marca-mx.unidadeditorial.es/618915d22743fe61eba4a841ef88767e/resize/660/f/webp/mx/assets/multimedia/imagenes/2024/09/09/17258980835052.jpg'
    }
  ]
}

const sidebarItems = [
  { title: 'Orden de los signos zodiacales' },
  { title: 'Canelo Álvarez pide revancha contra Bivol' },
  { title: 'Juego México vs Nueva Zelanda' },
  { title: 'Cruz Azul vs Pumas' },
  { title: 'Chiefs vs Ravens' },
  { title: 'Lakers vs Warriors' },
  { title: 'Gran Premio de Italia' },
  { title: 'Simulacro Nacional' },
  { title: 'Diablos Rojos vs Sultanes' },
  { title: 'Jets vs 49ers' },
  { title: 'Lo más leído' },
  { title: 'Lo más visto' },
  { title: 'Lo más comentado' }
]
</script>

<template>
  <v-app>
    <IHeader />
    <IHeaderNav />
    <ISection_3Cards />
    <ISectionMultiCard2Ads :cards="noticias.cards" />
    <INewsTickerContainer :newsItems="newsItems.news" />
    <main></main>
    <ISectionNews :cards="noticias.cards3" :sidebarItems="sidebarItems" />
    <ISectionMultiCard1Ads :cards="noticias.cards2" />
    <ISection3CardsDivider :cards="noticias.cardsSection3" />
    <ITest :cards="noticias.cardsSection3" />
    <IFooter />
  </v-app>
</template>

<style lang="sass" scoped></style>
