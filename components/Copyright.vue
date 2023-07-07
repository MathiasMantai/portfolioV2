<script setup>
    const startYear = 2023
    const createCopyrightString = (startYear) =>
    {
        let res = "&copy;";
        let currentYear = new Date().getFullYear();
        if(currentYear == startYear)
        {
            res += startYear;
        }
        else
        {
            res += startYear + " - " + currentYear;
        }
        return res + " Mathias Mantai";
    }

    
</script>

<template>
    <div :class="`
        text-sm bottom-0 w-full text-center
        sm:w-fit sm:fixed  sm:rotate-[-90deg]
    ` + (startYear == (new Date().getFullYear()) ? 'sm:bottom-[280px] sm:left-[12px]' : 'sm:bottom-[300px] sm:left-[-12px]' )">
        <span class="rotate-[-90deg]" v-html="createCopyrightString(startYear)"></span>
    </div>
</template>