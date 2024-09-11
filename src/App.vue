<script setup>
import {
  IHeader,
  IFooter,
  ISectionMultiCard2Ads,
  IHeaderNav,
  ISectionNews,
  INewsTickerContainer,
  ISectionMarca,
  ISectionMultiCard1Ads,
  ISection3CardsDivider,
  ISectionFutbol,
  ISectionMatches,
  ISectionBasketball,
  ITest
} from './components'
import { VApp } from 'vuetify/lib/components/index.mjs'

const football = {
  ISectionMultiCard1Ads: [
    {
      src: 'https://phantom-marca-mx.unidadeditorial.es/8186c96dfd4e6dc9d2585da76da8b542/resize/660/f/webp/mx/assets/multimedia/imagenes/2024/09/11/17260193291498.jpg',
      title:
        'Era Javier Aguirre en Selección de México no cautiva en USA: Butacas vacías ante Canadá y Nueva Zelanda',
      subtitle: 'Selección Nacional de México',
      text: 'LW'
    },
    {
      src: 'https://phantom-marca-mx.unidadeditorial.es/bf6d02ab705285591bc970fd8f3e4988/resize/660/f/webp/mx/assets/multimedia/imagenes/2024/09/11/17260181004349.jpg',
      title:
        'Víctor Dávila, regalo para Jardine y último fichaje de América ¿Para olvidar a Idrissi?',
      subtitle: 'Liga MX 2024',
      text: 'Eduardo Avila'
    },
    {
      src: 'https://phantom-marca-mx.unidadeditorial.es/3bcf5423ff0ff9b402a0158424e3f5c5/resize/660/f/webp/mx/assets/multimedia/imagenes/2024/09/11/17260165496006.jpg',
      title:
        'Resumen y goles Estados Unidos vs. Nueva Zelanda: Team USA da papelón previo a la presentación',
      subtitle: 'Selección de Estados Unidos',
      text: 'LW'
    },
    {
      src: 'https://phantom-marca-mx.unidadeditorial.es/94c3d273c8aa66e80bbcc9079a6af330/resize/660/f/webp/mx/assets/multimedia/imagenes/2024/09/10/17259806002243.jpg',
      title:
        'Afición también abandona a la Selección Mexicana ante Canadá: Así la venta de boletos',
      subtitle: 'Selección Nacional de México',
      text: 'Israel M. Zúñiga'
    },
    {
      src: 'https://phantom-marca-mx.unidadeditorial.es/13c36a4836abcb44ca606b5a93998367/resize/660/f/webp/mx/assets/multimedia/imagenes/2024/09/11/17260128853488.jpg',
      title:
        'Resumen Venezuela vs Uruguay: Bielsa cede segundo lugar de Eliminatorias, pierde a Cáceres por lesión',
      subtitle: 'Eliminatorias Conmebol',
      text: 'LW'
    },
    {
      src: 'https://phantom-marca-mx.unidadeditorial.es/65a5ef38a45a92d10fb0e91256055a60/resize/828/f/webp/mx/assets/multimedia/imagenes/2024/09/10/17259913229501.jpg',
      title: 'EUA vs Nueva Zelanda: dónde ver y a qué hora juega USA hoy en Amistoso del año 2024',
      subtitle: 'Fútbol',
      text: 'LW'
    }
  ]
}

const Marca = {
  ISectionMultiCard2Ads: [
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
  INewsTickerContainer: [
    {
      src: 'https://phantom-marca-mx.unidadeditorial.es/972cc5fb0914fa0f9a0259598a0254d1/resize/660/f/webp/mx/assets/multimedia/imagenes/2024/09/10/17259671831023.jpg',
      title: 'Adrian Newey ya es oficialmente de Aston Martin.. "El equipo que futuro"',
      subtitle: 'GP Azerbaiyán F1 2024',
      text: 'MARCO CANSECO'
    },
    {
      src: 'https://phantom-marca-mx.unidadeditorial.es/dd0044b9f0fcb5243563e3616c166296/resize/660/f/webp/mx/assets/multimedia/imagenes/2024/09/10/17260000861230.jpg',
      title:
        'Deco hace menos la salida de Julián Araujo del FC Barcelona "No es un jugador para el Barça"',
      subtitle: 'Mexicanos por el mundo',
      text: 'Eduardo Avila'
    },
    {
      src: 'https://phantom-marca-mx.unidadeditorial.es/d22c053e504fd36ae6f17aab846652bb/resize/990/f/webp/mx/assets/multimedia/imagenes/2024/09/10/17259780229694.jpg',
      title: 'Guillermo Ochoa no renuncia al Mundial: "A mi edad puedo aportar mucho"',
      subtitle: 'Selección Nacional de México',
      text: 'LW'
    },
    {
      src: 'https://phantom-marca-mx.unidadeditorial.es/a30e411ebd2861b6283f9dbe2bec0f08/resize/990/f/webp/mx/assets/multimedia/imagenes/2024/09/10/17259857051648.jpg',
      title: 'Video muestra maltrato a Tyreek Hill: Cámara de policía muestra el arresto',
      subtitle: 'NFL'
    }
  ],
  ISectionNews: [
    {
      src: 'https://phantom-marca-mx.unidadeditorial.es/a1143733454b41c27c07ba3f91a26dbd/resize/660/f/webp/mx/assets/multimedia/imagenes/2024/09/10/17259771840079.jpg',
      title: 'Steve Kerr, dueño del Mallorca, visita a la plantilla del equipo español',
      subtitle: 'LaLiga EA Sports 2024',
      text: 'EFE'
    },
    {
      src: 'https://phantom-marca-mx.unidadeditorial.es/6d808da5b4ab19c69bdf0bd4838986ac/resize/660/f/webp/mx/assets/multimedia/imagenes/2024/09/09/17258894397900.jpg',
      title: 'La madre de Imane Khelif hospitalizada por el escándalo olímpico de su hija',
      subtitle: 'Boxeo',
      text: 'CAROLINA MÁRQUEZ'
    },
    {
      src: 'https://phantom-marca-mx.unidadeditorial.es/b26ca207605d7b1b061c51d37f5e97bb/resize/660/f/webp/mx/assets/multimedia/imagenes/2024/09/10/17259467294444.jpg',
      title: 'Fallece James Earl Jones, la mítica voz original de Darth Vader en Star Wars',
      subtitle: 'Cine y TV',
      text: 'TW'
    },
    {
      src: 'https://phantom-marca-mx.unidadeditorial.es/a0f547b5a116db53c1a7f5b80aca54cf/resize/660/f/webp/mx/assets/multimedia/imagenes/2024/09/10/17259453662399.jpg',
      title: 'Cruz Azul: Giorgios Giakoumakis y su "Qué pedo, wey" que causa sensación en Mexico',
      subtitle: 'Liga MX 2024',
      text: 'LW'
    },
    {
      src: 'https://phantom-marca-mx.unidadeditorial.es/a8ac9cf1b09ce142f8a35c13b981e954/resize/660/f/webp/mx/assets/multimedia/imagenes/2024/09/10/17259972499783.jpg',
      title: '¿Veto a Faitelson? Televisa anuncia alineación para pelea de Canelo vs Berlanga',
      subtitle: 'Televisión',
      text: 'LW'
    },
    {
      src: 'https://phantom-marca-mx.unidadeditorial.es/49bb8587f1d78ea1879f826690ea3e29/resize/660/f/webp/mx/assets/multimedia/imagenes/2024/09/09/17258578564795.jpg',
      title: 'Tato Noriega y Rayados se despiden de Orbelín Pineda y su fichaje: "Es muy difícil"',
      subtitle: 'Liga MX 2024',
      text: 'ÁNGEL HÚGUEZ'
    }
  ],
  ISection3CardsDivider: [
    {
      src: 'https://phantom-marca-mx.unidadeditorial.es/82f37b2b329d3e02c71d8451a53df7dc/resize/660/f/webp/mx/assets/multimedia/imagenes/2024/09/10/17259845252563.jpg',
      title:
        'Colombia vs Argentina: dónde ver en México, hora, pronóstico y alineaciones Eliminatorias Conmebol 2024',
      subtitle: 'Eliminatorias Conmebol'
    },
    {
      src: 'https://phantom-marca-mx.unidadeditorial.es/863298e36e8166836df26190e6b479ff/resize/660/f/webp/mx/assets/multimedia/imagenes/2024/09/10/17259795683549.jpg',
      title:
        'México vs Canadá: horario y dónde ver partido de Selección Mexicana en Amistoso Internacional 2024',
      subtitle: 'Selección Nacional de México'
    },
    {
      src: 'https://phantom-marca-mx.unidadeditorial.es/a1e191c3fcca08e8016ff8b2847cf951/resize/660/f/webp/mx/assets/multimedia/imagenes/2024/09/10/17259818572541.jpg',
      title:
        'Partidos hoy México, Conmebol y más: horarios y dónde ver juegos hoy martes 10 de septiembre',
      subtitle: 'Futbol'
    }
  ]
}

const Basketball = {
  ISectionNews: [
    {
      src: 'https://phantom-marca-mx.unidadeditorial.es/66940bc6273b070c02f8fb01fd88fd14/resize/660/f/webp/mx/assets/multimedia/imagenes/2024/09/01/17251983160210.jpg',
      title:
        'Stephen Curry renueva con los Warriors y frustra el sueño de verlo con LeBron: "Mi plan es jugar aquí de por vida"',
      subtitle: 'NBA',
      text: 'Eugenio Muñoz'
    },
    {
      src: 'https://phantom-marca-mx.unidadeditorial.es/02593b3bfa9555de56f901750d5c6428/resize/660/f/webp/mx/assets/multimedia/imagenes/2024/08/29/17249433514928.jpg',
      title:
        'La Selección Colombia "fake" que engaña a Rusia en baloncesto queda expuesta ante todo el publico de las redes sociales',
      subtitle: 'Basquetbol',
      text: 'Jose Quiroga'
    },
    {
      src: 'https://phantom-marca-mx.unidadeditorial.es/dc21534e73fd33d668b3bb5a6b6bb18c/resize/660/f/webp/mx/assets/multimedia/imagenes/2024/08/12/17234336215263.jpg',
      title:
        '¡No son Dream Team! LeBron James le pone nuevo nombre al Team USA de basquetbol tras oro en París 2024',
      subtitle: 'Juegos de paris 2024',
      text: 'Eugenio Muñoz'
    },
    {
      src: 'https://phantom-marca-mx.unidadeditorial.es/5fa421759516c89f48ccd166c92a9c6f/resize/208/f/webp/mx/assets/multimedia/imagenes/2024/08/10/17233243819783.jpg',
      title:
        'Resumen USA vs. Francia: El Dream Team se queda con el oro olímpico de la mano de Curry y Lebron James',
      subtitle: 'Basquetbol',
      text: 'LW'
    },
    {
      src: 'https://phantom-marca-mx.unidadeditorial.es/9571e2f8b4c78cc8cc1603b4c97d41f0/resize/660/f/webp/mx/assets/multimedia/imagenes/2024/08/12/17234875996612.jpg',
      title:
        'Critican a LeBron James por gesto grosero con joven que le pide foto en celebración por el oro en París 2024',
      subtitle: 'NBA',
      text: 'Parker Jonhson'
    },
    {
      src: 'https://phantom-marca-mx.unidadeditorial.es/1549f4c436237cbf911445f37ef63fc5/resize/660/f/webp/mx/assets/multimedia/imagenes/2024/08/10/17232664647229.jpg',
      title:
        'Karim López, el mexicano que es visto como la máxima promesa internacional para la nueva NBA',
      subtitle: 'Basquetbol',
      text: 'LW'
    }
  ],
  ISection3CardsDivider: [
    {
      src: 'https://phantom-marca-mx.unidadeditorial.es/8a20d63e719ff39aa97d503457d77580/resize/660/f/webp/mx/assets/multimedia/imagenes/2024/08/08/17231503328625.jpg',
      title:
        'Resumen USA vs Serbia: El Dream Team hace una épica voltereta y van por el Oro Olímpico de París 2024',
      subtitle: 'Basquetbol'
    },
    {
      src: 'https://phantom-marca-mx.unidadeditorial.es/861ccec652f379c2d2608d4ccccd53a6/resize/660/f/webp/mx/assets/multimedia/imagenes/2024/08/06/17229799732152.jpg',
      title:
        'Resumen Estados Unidos vs. Brasil: el Dream Team logra el objetivo y se mete a Semifinales del Básquet Olímpico 2024',
      subtitle: 'Basquetbol'
    },
    {
      src: 'https://phantom-marca-mx.unidadeditorial.es/9df62b6466dfacbd748b12152d19561d/resize/660/f/webp/mx/assets/multimedia/imagenes/2024/08/06/17229718569272.jpg',
      title:
        'USA Basketball vs Brasil: a qué hora juegan y dónde ver al Dream Team de Estados Unidos en Olímpicos 2024',
      subtitle: 'Basquetbol'
    }
  ]
}

const sidebarItemsBasketball = [
  {
    title:
      'LeBron James defiende a su hijo Bronny de los haters: "¡Sigue así, que se joda todo el odio y el ruido!"'
  },
  {
    title: '¡Como todo un crack! Vinicius Jr tiene la más increíble colección de jerseys de la NBA'
  },
  {
    title:
      'Los Angeles Lakers se reúnen con Peso Pluma y sorprenden haciéndole un regalo muy especial'
  },
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
    <ISectionMarca />
    <ISectionMultiCard2Ads :cards="Marca.ISectionMultiCard2Ads" />
    <INewsTickerContainer :newsItems="Marca.INewsTickerContainer" />
    <main></main>
    <ISectionNews :cards="Marca.ISectionNews" :sidebarItems="sidebarItems" />
    <ISection3CardsDivider :cards="Marca.ISection3CardsDivider" />
    <ISectionFutbol />
    <ISectionMultiCard1Ads :cards="football.ISectionMultiCard1Ads" />
    <ISectionMatches />
    <ISectionBasketball />
    <ISection3CardsDivider :cards="Basketball.ISection3CardsDivider" />
    <ISectionNews :cards="Basketball.ISectionNews" :sidebarItems="sidebarItemsBasketball" />
    <ITest />
    <IFooter />
  </v-app>
</template>

<style lang="sass" scoped></style>
