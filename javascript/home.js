let apiVprojectsApi = new TempApi.VprojectsApi();import TempApi from '../src/index';window.onload = () => {apiVprojectsApi.getAllvprojects((error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const subDataElements =[...document.getElementById("iedp4").querySelectorAll( "[dataitem='true']" )].filter(
    (element, index, array) =>
    !array.reduce((hasAncestorFlag, dataItem) => hasAncestorFlag || (element.compareDocumentPosition(dataItem) & Node.DOCUMENT_POSITION_CONTAINS) === 8, false)
  );const map = new Map();  data.forEach((item,i) => {
    if(subDataElements.length > i)
      {
        try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'prName']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].prName;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'prName'){
        subDataElements[i].textContent = data[data.length -i -1].prName;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'prSDate']");
      const dateIsoFormat = new Date(data[data.length -i -1].prSDate);
      const outputString = (data[data.length -i -1].prSDate) ?   dateIsoFormat.getDate()+'-'+dateIsoFormat.getMonth()+'-'+dateIsoFormat.getFullYear() : '' ;
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = outputString;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'prSDate'){
        subDataElements[i].textContent = outputString;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'prEDate']");
      const dateIsoFormat = new Date(data[data.length -i -1].prEDate);
      const outputString = (data[data.length -i -1].prEDate) ?   dateIsoFormat.getDate()+'-'+dateIsoFormat.getMonth()+'-'+dateIsoFormat.getFullYear() : '' ;
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = outputString;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'prEDate'){
        subDataElements[i].textContent = outputString;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'prFunding']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].prFunding;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'prFunding'){
        subDataElements[i].textContent = data[data.length -i -1].prFunding;
        
      }
     } catch (e) { console.log(e) };
        map.set(subDataElements[i].getAttribute('id'), data[data.length-i-1])
        
      }
      
    });

    window.localStorage.setItem('data', JSON.stringify(Array.from(map.entries())));
    
    [...subDataElements].forEach((element,index) => {if(index >= data.length) subDataElements[index].style.display = 'none';})}});};