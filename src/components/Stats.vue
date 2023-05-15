<template>
    <v-container class="pa-4">
        <v-table density class="stats-table white-bg">
            <thead>
                <tr>
                    <th class="text-left">
                        Airing
                    </th>
                    <th class="text-left">
                        Format
                    </th>
                    <th class="text-left">
                        Episodes
                    </th>
                    <th class="text-left">
                        Episode Duration
                    </th>
                    <th class="text-left">
                        Status
                    </th>
                    <th class="text-left">
                        Start Date
                    </th>
                    <th class="text-left">
                        End Date
                    </th>
                    <th class="text-left">
                        Season
                    </th>
                    <th class="text-left">
                        Average Score
                    </th>
                    <th class="text-left">
                        Mean Score
                    </th>
                    <th class="text-left">
                        Studio
                    </th>
                    <th class="text-left">
                        Producers
                    </th>
                    <th class="text-left">
                        Source
                    </th>
                    <th class="text-left">
                        Genres
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="stand-out">{{ airing }}</td>
                    <td>{{ props.details.format }}</td>
                    <td>{{ props.details.episodes  }}</td>
                    <td>{{ `${props.details.duration} mins` }}</td>
                    <td>{{ functions.camalize(props.details.status) }}</td>
                    <td>{{ getDate(props.details.startDate) }}</td>
                    <td>{{ getDate(props.details.endDate) }}</td>
                    <td>{{ seasonYear }}</td>
                    <td>{{ `${props.details.averageScore}%` }}</td>
                    <td>{{ `${props.details.meanScore}%` }}</td>
                    <td>{{ mainStudio }}</td>
                    <td>{{ altStudios }}</td>
                    <td>{{ functions.camalize(props.details.source.replace('_', ' ')) }}</td>
                    <td>{{ genres }}</td>
                </tr>
            </tbody>
        </v-table>
    </v-container>
</template>
<script setup>
import { computed } from 'vue'
import functions from '../functions'

const props = defineProps({
    details: {
        type: Object
    }
})

// Functions
function getDate(dateObj) {
    if (dateObj.year == null || dateObj.month == null || dateObj.day == null)
        return '';

    const date = new Date(dateObj.year, dateObj.month, dateObj.day);
    const options = { month: 'short', day: 'numeric', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

// Computed Props
const airing = computed(() => {
    var airingInSeconds = props.details.nextAiringEpisode.timeUntilAiring;
    const days = Math.floor(airingInSeconds / 86400);
    const hours = Math.floor((airingInSeconds % 86400) / 3600);
    const minutes = Math.floor((airingInSeconds % 3600) / 60);

    return `Ep ${props.details.nextAiringEpisode.episode}: ${days}d ${hours}h ${minutes}m`;
});
const seasonYear = computed(() => {
    return `${functions.camalize(props.details.season)} ${props.details.seasonYear}`;
});
const mainStudio = computed(() => {
    const studio = props.details.studios.edges
        .filter((s) => {
            return s.isMain === true;
        }).map(obj => obj.node.name);
    return studio[0];
});
const altStudios = computed(() => {
    const studio = props.details.studios.edges
        .filter((s) => {
            return s.isMain === false;
        }).map(obj => obj.node.name);
    return studio.join(", ");
});
const genres = computed(() => {
    return props.details.genres.join(", ");
});
</script>
<style>
.stats-table td {
    white-space: nowrap;
    padding-bottom: 10px !important;
    text-align: left;
    color: rgb(92, 114, 138);
}

.stats-table .v-table__wrapper {
    padding-top: 8px;
}

.v-table .v-table__wrapper>table>thead>tr>th {
    color: rgb(146, 153, 161);
    border: none;
    font-size: 0.9rem;
    font-weight: 400;
    text-align: left;
    white-space: nowrap;
}

.stand-out {
    color: rgb(61, 180, 242) !important;
    font-weight: 500;
}
</style>