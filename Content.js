  {
    "name": "KW simplifier_v2",
    "description": "Only for highest council members",
    "version": "1.0",
    "manifest_version": 3,
    "permissions": [
      "tabs",
     "scripting",
      "storage",
      "activeTab"
    ],
    "host_permissions": [
     "https://*.kosmiczni.pl/*",
   "https://*.shinobiworld.pl/*"
    ],
    "action": {
      "default_popup": "popup.html"
    },
    "icons": {
      "16": "images/16.png",
      "48": "images/48.png",
      "128": "images/128.png"
    },
    "content_scripts": [
      {
        "matches": [
          "https://*.kosmiczni.pl/*",
          "https://*.shinobiworld.pl/*"
        ],
         "run_at": "document_start",
        "js": [
          "content_script.js",
          "jquery.js"
        ]
      },
      {
        "css": [
          "custom_styles.css"
        ],
        "matches": [
          "https://*.kosmiczni.pl/*",
          "https://*.shinobiworld.pl/*"
        ]
      }
    ],
    "web_accessible_resources": [
    {
      "resources": [ "content_script1.js", "scripts/*.js", "main.js",  "scripts/*.js"],
      "matches": [ "https://*.kosmiczni.pl/*", "https://*.shinobiworld.pl/*" ]

    }
  ]
    
  }
