# TempApi.VprojectsApi

All URIs are relative to *http://localhost:8090/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createvprojects**](VprojectsApi.md#createvprojects) | **POST** /vprojects | Creates the data
[**deletevprojects**](VprojectsApi.md#deletevprojects) | **DELETE** /vprojects/{vprojectsId} | Delete the element
[**getAllvprojects**](VprojectsApi.md#getAllvprojects) | **GET** /vprojects/getAll | Get all the data
[**getvprojects**](VprojectsApi.md#getvprojects) | **GET** /vprojects/{vprojectsId} | Get the element
[**updatevprojects**](VprojectsApi.md#updatevprojects) | **PUT** /vprojects/{vprojectsId} | Updates the element



## createvprojects

> Vprojects createvprojects(vprojects)

Creates the data

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.VprojectsApi();
let vprojects = new TempApi.Vprojects(); // Vprojects | data to be created
apiInstance.createvprojects(vprojects, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vprojects** | [**Vprojects**](Vprojects.md)| data to be created | 

### Return type

[**Vprojects**](Vprojects.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deletevprojects

> deletevprojects(vprojectsId)

Delete the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.VprojectsApi();
let vprojectsId = "vprojectsId_example"; // String | the Id parameter
apiInstance.deletevprojects(vprojectsId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vprojectsId** | **String**| the Id parameter | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getAllvprojects

> [Vprojects] getAllvprojects()

Get all the data

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.VprojectsApi();
apiInstance.getAllvprojects((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[Vprojects]**](Vprojects.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getvprojects

> Vprojects getvprojects(vprojectsId)

Get the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.VprojectsApi();
let vprojectsId = "vprojectsId_example"; // String | the Id parameter
apiInstance.getvprojects(vprojectsId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vprojectsId** | **String**| the Id parameter | 

### Return type

[**Vprojects**](Vprojects.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updatevprojects

> Vprojects updatevprojects(vprojectsId, opts)

Updates the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.VprojectsApi();
let vprojectsId = "vprojectsId_example"; // String | the Id parameter
let opts = {
  'vprojects': new TempApi.Vprojects() // Vprojects | data to be updated
};
apiInstance.updatevprojects(vprojectsId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vprojectsId** | **String**| the Id parameter | 
 **vprojects** | [**Vprojects**](Vprojects.md)| data to be updated | [optional] 

### Return type

[**Vprojects**](Vprojects.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

