<template>
    <ul role="list" class="flex flex-col gap-y-12">
        <!-- 
            Jeder Listeneintrag ist ein 'flex'-Container. Das ist der Schlüssel zur Responsivität.
            'relative' wird benötigt, damit wir die Zeitstrahl-Linie absolut positionieren können.
        -->
        <li v-for="(datarow, index) in props.data" :key="datarow.title" class="relative flex gap-x-4">
            
            <!-- 
                Die vertikale Linie, die alle Punkte verbindet.
                Sie wird nicht beim letzten Element angezeigt (`index !== props.data.length - 1`).
                'absolute' positioniert sie relativ zum 'li'-Elternteil.
            -->
            <div 
                v-if="index !== props.data.length - 1" 
                class="absolute left-0 top-5 h-full w-0.5 bg-slate-700" 
                style="transform: translateX(4px);"
            ></div>

            <!--
                Der Punkt auf der Zeitachse. Er sitzt über der Linie.
            -->
            <div class="relative flex h-fit">
                <div class="h-2.5 w-2.5 rounded-full bg-[var(--linkColor)]"></div>
            </div>

            <!-- 
                Der Inhaltsbereich. Nimmt den restlichen Platz ein (`flex-1`).
                Das Layout hier drin ist für bessere Lesbarkeit optimiert.
            -->
            <div class="flex-1 -mt-1">
                <!-- Datums- und Titelzeile -->
                <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <p class="text-sm font-semibold leading-6 text-gray-400">
                        {{ datarow.date }}
                    </p>
                </div>

                <!-- Die Informationskarte -->
                <div class="mt-2 p-4 flex flex-col gap-y-3 bg-[var(--cardBackgroundColor)] shadow-lg rounded-lg border border-slate-700
                            transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1 hover:border-slate-600"
                >
                    <h2 class="text-lg font-semibold"> 
                        {{ datarow.title }}
                        <!-- Firma wird nur angezeigt, wenn vorhanden. Sieht sauberer aus. -->
                        <span v-if="datarow.company" class="text-[var(--linkColor)] font-normal">
                            @ {{ datarow.company }}
                        </span>
                    </h2>

                    <!-- Die Technologie-Sektionen -->
                    <div v-if="datarow.languages" class="text-sm">
                        <h3 class="font-semibold text-gray-400">Programming Languages:</h3>
                        <p class="text-gray-300">{{ datarow.languages }}</p>
                    </div>
                    <div v-if="datarow.frameworks" class="text-sm mt-1">
                        <h3 class="font-semibold text-gray-400">Frameworks:</h3>
                        <p class="text-gray-300">{{ datarow.frameworks }}</p>
                    </div>
                    <div v-if="datarow.databases" class="text-sm mt-1">
                        <h3 class="font-semibold text-gray-400">Databases:</h3>
                        <p class="text-gray-300">{{ datarow.databases }}</p>
                    </div>
                    <div v-if="datarow.other_technologies" class="text-sm mt-1">
                        <h3 class="font-semibold text-gray-400">Other Technologies:</h3>
                        <p class="text-gray-300">{{ datarow.other_technologies }}</p>
                    </div>
                </div>
            </div>
        </li>
    </ul>
</template>

<script setup lang="ts">
    const props = defineProps<{
        data: {
            date: string,
            title: string,
            company: string,
            languages: string,
            frameworks: string,
            other_technologies: string,
            databases: string
        }[]
    }>()
</script>