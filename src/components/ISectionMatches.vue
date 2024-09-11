<template>
  <v-container>
    <v-row>
      <v-col
        v-for="(match, index) in matches"
        :key="index"
        :class="{ 'single-card': index === matches.length - 1 && matches.length % 3 !== 0 }"
        cols="12"
        sm="6"
        md="6"
        lg="4"
      >
        <v-card class="match-card">
          <v-img :src="match.image" class="match-image" height="150px"></v-img>
          <v-card-title class="headline match-title">{{ match.title }}</v-card-title>
          <v-card-subtitle class="match-subtitle">{{ match.author }}</v-card-subtitle>
          <v-card-text class="match-score">
            <div class="team">
              <img :src="match.team1Flag" class="flag" />
              <span>{{ match.team1 }}</span>
            </div>
            <div class="score">{{ match.score }}</div>
            <div class="team">
              <span>{{ match.team2 }}</span>
              <img :src="match.team2Flag" class="flag" />
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {
  VCard,
  VCardTitle,
  VCardSubtitle,
  VCardText,
  VImg,
  VContainer,
  VRow,
  VCol
} from 'vuetify/components'

export default {
  components: {
    VCard,
    VCardTitle,
    VCardSubtitle,
    VCardText,
    VImg,
    VContainer,
    VRow,
    VCol
  },
  data() {
    return {
      matches: [
        {
          title:
            'Resultado Países Bajos vs Alemania: Sacan chispas en partidazo de la UEFA Nations League 2024',
          author: 'ISRAEL M. ZÚÑIGA',
          image:
            'https://phantom-marca-mx.unidadeditorial.es/ecb9996962b98d257ad544e9542288d5/resize/208/f/webp/mx/assets/multimedia/imagenes/2024/09/10/17260020690617.jpg',
          team1: 'Países Bajos',
          team1Flag: 'https://e00-marca.uecdn.es/assets/sports/logos/football/png/72x72/357.png',
          team2: 'Alemania',
          team2Flag: 'https://e00-marca.uecdn.es/assets/sports/logos/football/png/72x72/357.png',
          score: '2-2'
        },
        {
          title: 'Venezuela vs Uruguay EN VIVO. Partido hoy Eliminatorias Conmebol 2024',
          author: 'REDACCIÓN MARCA MX',
          image:
            'https://phantom-marca-mx.unidadeditorial.es/00cebd95b8d32a0f194bae7ebc98c328/resize/208/f/webp/mx/assets/multimedia/imagenes/2024/09/10/17259960947034.jpg',
          team1: 'Venezuela',
          team1Flag: 'https://e00-marca.uecdn.es/assets/sports/logos/football/png/72x72/833.png',
          team2: 'Uruguay',
          team2Flag: 'https://e00-marca.uecdn.es/assets/sports/logos/football/png/72x72/837.png',
          score: '0-0'
        },
        {
          title: 'Ecuador vs Perú EN VIVO Online. Partido hoy Eliminatorias Sudamericanas 2024',
          author: 'MIGUEL JIMÉNEZ ÁLVAREZ',
          image:
            'https://phantom-marca-mx.unidadeditorial.es/f5b9d6d842961806332087e4e49f6ce9/resize/208/f/webp/mx/assets/multimedia/imagenes/2024/09/10/17259945290617.jpg',
          team1: 'Ecuador',
          team1Flag: 'https://e00-marca.uecdn.es/assets/sports/logos/football/png/72x72/830.png',
          team2: 'Perú',
          team2Flag: 'https://e00-marca.uecdn.es/assets/sports/logos/football/png/72x72/833.png',
          score: '1-0'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.match-card {
  margin: 16px 0;
  background-color: #333;
  color: #fff;
  transition:
    transform 0.2s,
    box-shadow 0.2s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  }

  .match-image {
    object-fit: cover;
  }

  .match-title {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 8px;
  }

  .match-subtitle {
    font-size: 12px;
    margin-bottom: 8px;
    color: #ccc;
  }

  .match-score {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #444;
    padding: 8px;
    border-top: 1px solid #555;

    .team {
      display: flex;
      align-items: center;

      /* Increased space between flag and text */
      .flag {
        width: 20px;
        height: 20px;
        margin-right: 12px; /* Increased margin */
      }

      span {
        margin-right: 8px; /* Added margin to the text */
      }
    }

    .score {
      font-size: 24px;
      font-weight: bold;
    }
  }
}

/* Center the last card if it's alone in the row */
.single-card {
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
}
</style>
