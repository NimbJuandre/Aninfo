<template>
    <div>
        <v-table density class="stats-table">
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
                        Genre
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{{ airing }}</td>
                </tr>
            </tbody>
        </v-table>
    </div>
</template>
<script setup>
import { computed } from 'vue'

const props = defineProps({
    details: {
        type: Object
    }
})

// Computed Props
const airing = computed(() => {
    var airingInDate = new Date(props.details.nextAiringEpisode.timeUntilAiring);
    var days = `${airingInDate.getDay()}d`;
    var hours = `${airingInDate.getHours()}h`;
    var minutes = `${airingInDate.getMinutes()}m`;

    return `Ep ${props.details.nextAiringEpisode.episode}: ${days} ${hours} ${minutes}`;
})


</script>
<style>
.stats-table td {
    white-space: nowrap;
    padding-bottom: 10px !important;
}
</style>