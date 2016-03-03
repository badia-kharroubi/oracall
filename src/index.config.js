
  var indexConfig = {
    "general": {
      "defaultHost": "http://toto.fr"
    },
    "logger": {
      "prefixPattern": "fiburo [%3$s] - %2$s - %1$s => ",
      "datetimePattern": "YYYY-MM-DDTHH:mm:ssZ",
      "logLevels": {
        "app.httpcalls": "TRACE",
        "app.home": "TRACE",
        "app": "TRACE",
        "*": "ERROR"
      }
    },
    "httpcalls": {
      "githubApiBase": "https://api.github.com",
      "gericoApiBase": "http://localhost:18080/gerico/api/v1",
      "analyseApiBase": "http://localhost:18080/analyse/api/v1",
      "timestampMarker": true,
      "override": true,
      "httpGet": {
        "override": true,
        "configs": [
          {
            "rank": 1,
            "override": true,
            "queryParams": false,
            "pathParams": true,
            "origin": {
              "host": "http://localhost:18080",
              "api": "/gerico/api/v1/entreprise/entites-juridiques/{idej}/contacts",
              "regex": "^(http:\\/\\/|https:\\/\\/)([a-zA-Z0-9.\\-_:])+(\\/){1}(gerico\\/api\\/v1\\/entreprise\\/entites-juridiques\\/){1}([A-Za-z0-9])+((\\/contacts)$){1}",
              "pathParams": [
                {
                  "id": 1,
                  "key": "{idej}",
                  "slashNumberBefore": 8
                }
              ]
            },
            "target": {
              "host": "http://localhost:28080",
              "api": "/ficonef/api/v1/entreprise/entites-juridiques/{idej}/contacts",
              "pathParams": [
                {
                  "id": 1,
                  "idOrigin": 1,
                  "key": "{idej}",
                  "slashNumberBefore": 8
                }
              ]
            }
          },
          {
            "rank": 2,
            "override": true,
            "pathParams": true,
            "queryParams": false,
            "origin": {
              "host": "http://localhost:18080",
              "api": "/gerico/api/v1/entreprise/entites-juridiques/{idej}/contacts/{idcontact}",
              "regex": "^(http:\\/\\/|https:\\/\\/)([A-Za-z0-9.\\-_:])+(\\/){1}(gerico\\/api\\/v1\\/entreprise\\/entites-juridiques\\/){1}([A-Za-z0-9])+(\\/contacts\\/){1}(([A-Za-z0-9])+)$",
              "pathParams": [
                {
                  "id": 1,
                  "key": "{idej}",
                  "slashNumberBefore": 8
                },
                {
                  "id": 2,
                  "key": "{idcontact}",
                  "slashNumberBefore": 10
                }
              ]
            },
            "target": {
              "host": "http://localhost:28080",
              "api": "/ficonef/api/v1/entreprise/entites-juridiques/{idej}/contacts/{idcontact}",
              "pathParams": [
                {
                  "id": 1,
                  "idOrigin": 1,
                  "key": "{idej}",
                  "slashNumberBefore": 8
                },
                {
                  "id": 2,
                  "idOrigin": 2,
                  "key": "{idcontact}",
                  "slashNumberBefore": 10
                }
              ]
            }
          },
          {
            "rank": 3,
            "override": true,
            "pathParams": true,
            "queryParams": false,
            "origin": {
              "host": "http://localhost:18080",
              "api": "/gerico/api/v1/entreprise/entites-juridiques/{idej}/cotation-simplifiee",
              "regex": "^(http:\\/\\/|https:\\/\\/)([A-Za-z0-9.\\-_:])+(\\/){1}(gerico\\/api\\/v1\\/entreprise\\/entites-juridiques\\/){1}([A-Za-z0-9])+((\\/cotation-simplifiee)$){1}",
              "pathParams": [
                {
                  "id": 1,
                  "key": "{idej}",
                  "slashNumberBefore": 8
                }
              ]
            },
            "target": {
              "host": "http://localhost:28080",
              "api": "/ficonef/api/v1/entreprise/entites-juridiques/{idej}/cotation-simplifiee",
              "pathParams": [
                {
                  "id": 1,
                  "idOrigin": 1,
                  "key": "{idej}",
                  "slashNumberBefore": 8
                }
              ]
            }
          },
          {
            "rank": 4,
            "override": true,
            "pathParams": false,
            "queryParams": false,
            "origin": {
              "host": "http://localhost:18080",
              "api": "/analyse/api/v1/entreprise/synthese",
              "regex": "^(http:\\/\\/|https:\\/\\/)([A-Za-z0-9.\\-_:])+(\\/){1}(gerico\\/api\\/v1\\/entreprise\\/entites-juridiques\\/){1}([A-Za-z0-9])+((\\/cotation-simplifiee)$){1}"
            },
            "target": {
              "host": "http://localhost:28080",
              "api": "/ficonef-ws-common/api/v1/commons/entreprise/synthese"
            }
          },
          {
            "rank": 5,
            "override": true,
            "queryParams": true,
            "pathParams": true,
            "origin": {
              "host": "http://localhost:18080",
              "api": "/gerico/api/v1/entreprise/entites-juridiques/{idej}/contacts?param1=param1value",
              "regex": "^(http:\\/\\/|https:\\/\\/)([A-Za-z0-9.\\-_:])+(\\/){1}(gerico\\/api\\/v1\\/entreprise\\/entites-juridiques\\/){1}([A-Za-z0-9])+((\\/contacts\\?)){1}(([a-zA-Z0-9.\\-_:=&])+$){1}",
              "pathParams": [
                {
                  "id": 1,
                  "key": "{idej}",
                  "slashNumberBefore": 8
                }
              ]
            },
            "target": {
              "host": "http://localhost:28080",
              "api": "/ficonef/api/v1/entreprise/entites-juridiques/{idej}/contacts?param1=param1value",
              "pathParams": [
                {
                  "id": 1,
                  "idOrigin": 1,
                  "key": "{idej}",
                  "slashNumberBefore": 8
                }
              ]
            }
          }
        ]
      },
      "httpPost": {
        "override": false
      },
      "httpPut": {
        "override": false
      },
      "httpDelete": {
        "override": false
      }
    }
  };