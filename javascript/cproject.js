let apiVprojectsApi = new TempApi.VprojectsApi();import TempApi from '../src/index';let vprojects = new TempApi.Vprojects();$(
      function () { $("#datepicker").datepicker({format: 'dd-mm-yyyy'}); }
    );$(
      function () { $("#datepicker-2").datepicker({format: 'dd-mm-yyyy'}); }
    );document.getElementById('itpux').onclick = (event) => {
    event.preventDefault();
    vprojects['prName'] = document.querySelector("[annotationname = 'prName']").value;vprojects['prSDate'] = document.querySelector("[annotationname = 'prSDate']").value.replace(/(?<day>\d+)-(?<month>\d+-)/,'$<month>$<day>-');vprojects['prEDate'] = document.querySelector("[annotationname = 'prEDate']").value.replace(/(?<day>\d+)-(?<month>\d+-)/,'$<month>$<day>-');vprojects['prFunding'] = document.querySelector("[annotationname = 'prFunding']").value;apiVprojectsApi.createvprojects( vprojects, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); {   location.href= '/home' ;}}});};window.onload = () => {};