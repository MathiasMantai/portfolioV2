<script>
    export default {
        data() {
            return {
                startYear: 2023,
                copyrightString: "Copyright &copy;"
            }
        },
        methods: {
            createCopyrightString(startYear)
            {
                let res = "&copy;";
                let currentYear = new Date().getFullYear();
                if(currentYear == startYear)
                {
                    res += startYear;
                }
                else
                {
                    res += startyear + " - " + currentYear;
                }
                return res + " Mathias Mantai";
            }
        }

    }
</script>

<template>
    <span class="rotate-[-90deg]" v-html="this.createCopyrightString(2023)"></span>
</template>