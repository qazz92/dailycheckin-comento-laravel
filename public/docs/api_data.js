define({ "api": [
  {
    "type": "post",
    "url": "/api/answer",
    "title": "Answer 쓰기",
    "name": "create",
    "group": "Answer",
    "version": "0.0.1",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer",
            "description": "<p>firebase id token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "defaultValue": "applicant/json",
            "description": "<p>applicant/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "defaultValue": "applicant/json",
            "description": "<p>applicant/json</p>"
          }
        ]
      }
    },
    "description": "<p>Answer 쓰기</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "emotion_id",
            "description": "<p>emotion id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>본문</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 204 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>메세지</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Not Unauthorized\n{\n  \"message\": \"Unauthenticated.\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "https://daily.api.comento.info/api/answer"
      }
    ],
    "filename": "app/Http/Controllers/AnswerController.php",
    "groupTitle": "Answer"
  },
  {
    "type": "delete",
    "url": "/api/answer",
    "title": "Answer 삭제",
    "name": "delete",
    "group": "Answer",
    "version": "0.0.1",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer",
            "description": "<p>firebase id token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "defaultValue": "applicant/json",
            "description": "<p>applicant/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "defaultValue": "applicant/json",
            "description": "<p>applicant/json</p>"
          }
        ]
      }
    },
    "description": "<p>Answer 삭제</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "answer_id",
            "description": "<p>answer id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 204 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>메세지</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Not Unauthorized\n{\n  \"message\": \"Unauthenticated.\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"message\": \"니꺼아님!\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "https://daily.api.comento.info/api/answer"
      }
    ],
    "filename": "app/Http/Controllers/AnswerController.php",
    "groupTitle": "Answer"
  },
  {
    "type": "get",
    "url": "/api/answer",
    "title": "Answer 리스트",
    "name": "list",
    "group": "Answer",
    "version": "0.0.1",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer",
            "description": "<p>firebase id token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "defaultValue": "applicant/json",
            "description": "<p>applicant/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "defaultValue": "applicant/json",
            "description": "<p>applicant/json</p>"
          }
        ]
      }
    },
    "description": "<p>Answer 리스트</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>페이지</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>페이지당 갯수</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n {\n     \"id\": 18,\n     \"emotion_id\": 3,\n     \"user_id\": 5,\n     \"content\": \"축구선수의 2년차 징크스처럼 아웃바운드 세일즈도 ...\",\n     \"updated_at\": \"2020-06-23 16:19:33\",\n     \"like_count\": 0,\n     \"comment_count\": 0.\n     \"is_like\": false,\n     \"emotion\": {\n         \"id\": 3,\n         \"emoji\": \"😎\",\n         \"value\": 1,\n         \"name\": \"뿌듯해요\",\n         \"answer\": \"뿌듯해서 어깨가 하늘로 솟았어요\",\n         \"comment\": \"어깨춤을 춰 주세요\"\n     },\n     \"user\": {\n         \"id\": 5,\n         \"email\": \"yubin.kim@comento.kr\",\n         \"photoURL\": \"https://lh4.googleusercontent.com/-aLKv4NrPysY/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rdw-af-WSt8fo30wj9WW7j9yjnXRA/photo.jpg\",\n         \"display_name\": \"김유빈\"\n     }\n },\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>메세지</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Not Unauthorized\n{\n  \"message\": \"Unauthenticated.\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "https://daily.api.comento.info/api/answer"
      }
    ],
    "filename": "app/Http/Controllers/AnswerController.php",
    "groupTitle": "Answer"
  },
  {
    "type": "get",
    "url": "/api/answer/{id}",
    "title": "Answer 디테일",
    "name": "show",
    "group": "Answer",
    "version": "0.0.1",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer",
            "description": "<p>firebase id token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "defaultValue": "applicant/json",
            "description": "<p>applicant/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "defaultValue": "applicant/json",
            "description": "<p>applicant/json</p>"
          }
        ]
      }
    },
    "description": "<p>Answer 디테일</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"id\": 1,\n     \"emotion_id\": 8,\n     \"user_id\": 9,\n     \"content\": \"일이 많고 바쁘고 싶은 나, 비정상인가요?\\n\\n장..\",\n     \"created_at\": \"2020-02-25 09:14:31\",\n     \"updated_at\": \"2020-06-23 16:19:32\",\n     \"is_like\": false,\n     \"like\": [\n         {\n             \"id\": 1954,\n             \"answer_id\": 1,\n             \"user_id\": 14,\n             \"created_at\": \"2020-02-25 10:52:08\",\n             \"user\": {\n                 \"id\": 14,\n                 \"display_name\": \"이민규\",\n                 \"email\": \"mingyu.lee@comento.kr\",\n                 \"photoURL\": \"https://lh3.googleusercontent.com/a-/AAuE7mBpm1LBaxuCv5GhhwYC5GBOnx8y9Rvd9b8QuVUu\"\n             }\n         },\n         {\n             \"id\": 3645,\n             \"answer_id\": 1,\n             \"user_id\": 1,\n             \"created_at\": \"2020-02-25 10:54:19\",\n             \"user\": {\n                 \"id\": 1,\n                 \"display_name\": \"최현주\",\n                 \"email\": \"hyunju.choi@comento.kr\",\n                 \"photoURL\": \"https://lh3.googleusercontent.com/--pbZCw7lKLI/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rdG2sleGFs9IhiLUVy-IYnV3MNbZA/photo.jpg\"\n             }\n         },\n         {\n             \"id\": 848,\n             \"answer_id\": 1,\n             \"user_id\": 4,\n             \"created_at\": \"2020-02-25 12:02:33\",\n             \"user\": {\n                 \"id\": 4,\n                 \"display_name\": \"유성실\",\n                 \"email\": \"yooo1201@gmail.com\",\n                 \"photoURL\": \"https://lh3.googleusercontent.com/-99TGkxJQRss/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rdFMQ5pcFJWK1MCPqNjv93va15OLQ/photo.jpg\"\n             }\n         },\n         {\n             \"id\": 4069,\n             \"answer_id\": 1,\n             \"user_id\": 25,\n             \"created_at\": \"2020-02-25 14:17:14\",\n             \"user\": {\n                 \"id\": 25,\n                 \"display_name\": \"김민섭\",\n                 \"email\": \"minseop.kim@comento.kr\",\n                 \"photoURL\": \"https://lh4.googleusercontent.com/-hktnQmYgifQ/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rdi6JcyB3B5s23qcQzH6O2KqcnUkw/photo.jpg\"\n             }\n         }\n     ],\n     \"comment\": [\n         {\n             \"id\": 1337,\n             \"answer_id\": 1,\n             \"user_id\": 4,\n             \"content\": \"🚨삐빅, 정상입니다\",\n             \"created_at\": \"2020-02-25 12:02:49\",\n             \"updated_at\": \"2020-02-25 12:02:49\",\n             \"user\": {\n                 \"id\": 4,\n                 \"display_name\": \"유성실\",\n                 \"email\": \"yooo1201@gmail.com\",\n                 \"photoURL\": \"https://lh3.googleusercontent.com/-99TGkxJQRss/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rdFMQ5pcFJWK1MCPqNjv93va15OLQ/photo.jpg\"\n             }\n         },\n         {\n             \"id\": 169,\n             \"answer_id\": 1,\n             \"user_id\": 3,\n             \"content\": \"이니시스 환불해드린거 접니다 아시죠 확인부탁드립니다 고객님 ㅎㅎㅎ\",\n             \"created_at\": \"2020-02-25 16:21:48\",\n             \"updated_at\": \"2020-02-25 16:21:48\",\n             \"user\": {\n                 \"id\": 3,\n                 \"display_name\": \"황유진\",\n                 \"email\": \"yujin.hwang@comento.kr\",\n                 \"photoURL\": \"https://lh6.googleusercontent.com/-UQ7cpAs5YCs/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rcB1fzQ5RQ9J7FzwxW-epMsMGfK-g/photo.jpg\"\n             }\n         }\n     ],\n     \"emotion\": {\n         \"id\": 8,\n         \"emoji\": \"😐\",\n         \"value\": 0,\n         \"name\": \"그냥그래요\",\n         \"answer\": \"걍 그래요(왜그럴깡?)\",\n         \"comment\": \"왜그럴깡?\"\n     }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>메세지</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Not Unauthorized\n{\n  \"message\": \"Unauthenticated.\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "https://daily.api.comento.info/api/answer/1"
      }
    ],
    "filename": "app/Http/Controllers/AnswerController.php",
    "groupTitle": "Answer"
  },
  {
    "type": "patch",
    "url": "/api/answer",
    "title": "Answer 수정",
    "name": "update",
    "group": "Answer",
    "version": "0.0.1",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer",
            "description": "<p>firebase id token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "defaultValue": "applicant/json",
            "description": "<p>applicant/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "defaultValue": "applicant/json",
            "description": "<p>applicant/json</p>"
          }
        ]
      }
    },
    "description": "<p>Answer 수정</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "answer_id",
            "description": "<p>answer id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "emotion_id",
            "description": "<p>페이지</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>본문</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 204 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>메세지</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Not Unauthorized\n{\n  \"message\": \"Unauthenticated.\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "https://daily.api.comento.info/api/answer"
      }
    ],
    "filename": "app/Http/Controllers/AnswerController.php",
    "groupTitle": "Answer"
  },
  {
    "type": "post",
    "url": "/api/comment",
    "title": "Comment 쓰기",
    "name": "create",
    "group": "Comment",
    "version": "0.0.1",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer",
            "description": "<p>firebase id token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "defaultValue": "applicant/json",
            "description": "<p>applicant/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "defaultValue": "applicant/json",
            "description": "<p>applicant/json</p>"
          }
        ]
      }
    },
    "description": "<p>Comment 쓰기</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "answer_id",
            "description": "<p>answer id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>본문</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 204 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>메세지</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Not Unauthorized\n{\n  \"message\": \"Unauthenticated.\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "https://daily.api.comento.info/api/comment"
      }
    ],
    "filename": "app/Http/Controllers/CommentController.php",
    "groupTitle": "Comment"
  },
  {
    "type": "delete",
    "url": "/api/comment",
    "title": "Comment 삭제",
    "name": "delete",
    "group": "Comment",
    "version": "0.0.1",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer",
            "description": "<p>firebase id token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "defaultValue": "applicant/json",
            "description": "<p>applicant/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "defaultValue": "applicant/json",
            "description": "<p>applicant/json</p>"
          }
        ]
      }
    },
    "description": "<p>Comment 삭제</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "comment_id",
            "description": "<p>comment id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 204 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>메세지</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Not Unauthorized\n{\n  \"message\": \"Unauthenticated.\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"message\": \"니꺼아님!\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "https://daily.api.comento.info/api/comment"
      }
    ],
    "filename": "app/Http/Controllers/CommentController.php",
    "groupTitle": "Comment"
  },
  {
    "type": "patch",
    "url": "/api/comment",
    "title": "Comment 수정",
    "name": "update",
    "group": "Comment",
    "version": "0.0.1",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer",
            "description": "<p>firebase id token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "defaultValue": "applicant/json",
            "description": "<p>applicant/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "defaultValue": "applicant/json",
            "description": "<p>applicant/json</p>"
          }
        ]
      }
    },
    "description": "<p>Comment 수정</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "comment_id",
            "description": "<p>comment id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>본문</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 204 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>메세지</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Not Unauthorized\n{\n  \"message\": \"Unauthenticated.\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "https://daily.api.comento.info/api/comment"
      }
    ],
    "filename": "app/Http/Controllers/CommentController.php",
    "groupTitle": "Comment"
  },
  {
    "type": "get",
    "url": "/api/emotion",
    "title": "Emotion 리스트",
    "name": "list",
    "group": "Emotion",
    "version": "0.0.1",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer",
            "description": "<p>firebase id token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "defaultValue": "applicant/json",
            "description": "<p>applicant/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "defaultValue": "applicant/json",
            "description": "<p>applicant/json</p>"
          }
        ]
      }
    },
    "description": "<p>Emotion 리스트</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n {\n     \"id\": 1,\n     \"emoji\": \"🤮\",\n     \"value\": -1,\n     \"name\": \"바빴어요\",\n     \"answer\": \"토할만큼 바빴어요(웩)\",\n     \"comment\": \"도와줄 게 없는지 물어보세요!\",\n     \"uid\": \"H12ZXGOhhNUc3xszOFO2\",\n     \"created_at\": \"2020-06-23 16:19:27\",\n     \"updated_at\": \"2020-06-23 16:19:27\"\n },\n ...\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>메세지</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Not Unauthorized\n{\n  \"message\": \"Unauthenticated.\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "https://daily.api.comento.info/api/emotion"
      }
    ],
    "filename": "app/Http/Controllers/EmotionController.php",
    "groupTitle": "Emotion"
  },
  {
    "type": "post",
    "url": "/api/like",
    "title": "좋아요 하기",
    "name": "create",
    "group": "Like",
    "version": "0.0.1",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer",
            "description": "<p>firebase id token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "defaultValue": "applicant/json",
            "description": "<p>applicant/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "defaultValue": "applicant/json",
            "description": "<p>applicant/json</p>"
          }
        ]
      }
    },
    "description": "<p>Comment 쓰기</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "answer_id",
            "description": "<p>answer id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 204 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>메세지</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Not Unauthorized\n{\n  \"message\": \"Unauthenticated.\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "https://daily.api.comento.info/api/like"
      }
    ],
    "filename": "app/Http/Controllers/LikeController.php",
    "groupTitle": "Like"
  },
  {
    "type": "delete",
    "url": "/api/like",
    "title": "좋아요 삭제",
    "name": "delete",
    "group": "Like",
    "version": "0.0.1",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer",
            "description": "<p>firebase id token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "defaultValue": "applicant/json",
            "description": "<p>applicant/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "defaultValue": "applicant/json",
            "description": "<p>applicant/json</p>"
          }
        ]
      }
    },
    "description": "<p>Comment 쓰기</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "like_id",
            "description": "<p>like id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 204 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>메세지</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Not Unauthorized\n{\n  \"message\": \"Unauthenticated.\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"message\": \"니꺼아님!\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "https://daily.api.comento.info/api/like"
      }
    ],
    "filename": "app/Http/Controllers/LikeController.php",
    "groupTitle": "Like"
  },
  {
    "type": "post",
    "url": "/api/notice",
    "title": "Notice 쓰기",
    "name": "create",
    "group": "Notice",
    "version": "0.0.1",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer",
            "description": "<p>firebase id token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "defaultValue": "applicant/json",
            "description": "<p>applicant/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "defaultValue": "applicant/json",
            "description": "<p>applicant/json</p>"
          }
        ]
      }
    },
    "description": "<p>Notice 쓰기</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>제목</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>본문</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "version",
            "description": "<p>버전</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 204 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>메세지</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Not Unauthorized\n{\n  \"message\": \"Unauthenticated.\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "https://daily.api.comento.info/api/notice"
      }
    ],
    "filename": "app/Http/Controllers/NoticeController.php",
    "groupTitle": "Notice"
  },
  {
    "type": "delete",
    "url": "/api/notice",
    "title": "Notice 삭제",
    "name": "delete",
    "group": "Notice",
    "version": "0.0.1",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer",
            "description": "<p>firebase id token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "defaultValue": "applicant/json",
            "description": "<p>applicant/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "defaultValue": "applicant/json",
            "description": "<p>applicant/json</p>"
          }
        ]
      }
    },
    "description": "<p>Notice 삭제</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "notice_id",
            "description": "<p>notice id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 204 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>메세지</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Not Unauthorized\n{\n  \"message\": \"Unauthenticated.\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "https://daily.api.comento.info/api/notice"
      }
    ],
    "filename": "app/Http/Controllers/NoticeController.php",
    "groupTitle": "Notice"
  },
  {
    "type": "get",
    "url": "/api/notice",
    "title": "Notice 리스트",
    "name": "list",
    "group": "Notice",
    "version": "0.0.1",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer",
            "description": "<p>firebase id token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "defaultValue": "applicant/json",
            "description": "<p>applicant/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "defaultValue": "applicant/json",
            "description": "<p>applicant/json</p>"
          }
        ]
      }
    },
    "description": "<p>Notice 리스트</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>페이지</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>페이지당 갯수</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"current_page\": 1,\n \"data\": [\n         {\n             \"id\": 1,\n             \"title\": \"1.2.0\",\n             \"version\": \"1.2.0\",\n             \"content\": \" 📌 <b>신규 기능</b><br> - 질문지가 3번째 버전(회고)으로 변경되었어요.\",\n             \"created_at\": \"2019-12-18 01:44:00\",\n             \"updated_at\": \"2020-06-23 16:19:23\"\n         },\n     ...\n ],\n \"first_page_url\": \"http://localhost:8000/api/notice?page=1\",\n \"from\": 1,\n \"last_page\": 1,\n \"last_page_url\": \"http://localhost:8000/api/notice?page=1\",\n \"next_page_url\": null,\n \"path\": \"http://localhost:8000/api/notice\",\n \"per_page\": \"10\",\n \"prev_page_url\": null,\n \"to\": 7,\n \"total\": 7\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>메세지</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Not Unauthorized\n{\n  \"message\": \"Unauthenticated.\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "https://daily.api.comento.info/api/notice"
      }
    ],
    "filename": "app/Http/Controllers/NoticeController.php",
    "groupTitle": "Notice"
  },
  {
    "type": "get",
    "url": "/api/notice/{id}",
    "title": "Notice 디테일",
    "name": "show",
    "group": "Notice",
    "version": "0.0.1",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer",
            "description": "<p>firebase id token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "defaultValue": "applicant/json",
            "description": "<p>applicant/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "defaultValue": "applicant/json",
            "description": "<p>applicant/json</p>"
          }
        ]
      }
    },
    "description": "<p>Notice 디테일</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"id\": 1,\n     \"title\": \"1.2.0\",\n     \"version\": \"1.2.0\",\n     \"content\": \" 📌 <b>신규 기능</b><br> - 질문지가 3번째 버전(회고)으로 변경되었어요.\",\n     \"created_at\": \"2019-12-18 01:44:00\",\n     \"updated_at\": \"2020-06-23 16:19:23\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>메세지</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Not Unauthorized\n{\n  \"message\": \"Unauthenticated.\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "https://daily.api.comento.info/api/notice/1"
      }
    ],
    "filename": "app/Http/Controllers/NoticeController.php",
    "groupTitle": "Notice"
  },
  {
    "type": "patch",
    "url": "/api/notice",
    "title": "Notice 수정",
    "name": "update",
    "group": "Notice",
    "version": "0.0.1",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer",
            "description": "<p>firebase id token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "defaultValue": "applicant/json",
            "description": "<p>applicant/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "defaultValue": "applicant/json",
            "description": "<p>applicant/json</p>"
          }
        ]
      }
    },
    "description": "<p>Notice 수정</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "notice_id",
            "description": "<p>notice id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>제목</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>본문</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "version",
            "description": "<p>버전</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 204 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>메세지</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Not Unauthorized\n{\n  \"message\": \"Unauthenticated.\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "https://daily.api.comento.info/api/notice"
      }
    ],
    "filename": "app/Http/Controllers/NoticeController.php",
    "groupTitle": "Notice"
  },
  {
    "type": "get",
    "url": "/api/user/me",
    "title": "User 정보",
    "name": "me",
    "group": "User",
    "version": "0.0.1",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer",
            "description": "<p>firebase id token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "defaultValue": "applicant/json",
            "description": "<p>applicant/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "defaultValue": "applicant/json",
            "description": "<p>applicant/json</p>"
          }
        ]
      }
    },
    "description": "<p>유저 정보</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "uid",
            "description": "<p>firebase</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>이메일</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "photoURL",
            "description": "<p>프로필 주소</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "display_name",
            "description": "<p>이름</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "created_at",
            "description": "<p>생성시간</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updated_at",
            "description": "<p>마지막 업뎃 시간</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"id\" : 12,\n     \"uid\" : \"3rBTkPY91TOl8fRnBI6K9QfeG852\",\n     \"email\" : \"email@test.com\",\n     \"photoURL\" : \"https://..\",\n     \"display_name\" : \"코대리\",\n     \"created_at\" : \"2020-06-23 15:46:23\",\n     \"updated_at\" : \"2020-06-23 15:46:23\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>메세지</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Not Unauthorized\n{\n  \"message\": \"Unauthenticated.\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "https://daily.api.comento.info/api/user/me"
      }
    ],
    "filename": "app/Http/Controllers/UserController.php",
    "groupTitle": "User"
  }
] });
