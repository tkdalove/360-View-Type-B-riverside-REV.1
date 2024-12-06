var APP_DATA = {
  "scenes": [
    {
      "id": "0-out-door-pool",
      "name": "Out door pool",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.7394202783300798,
          "pitch": 0.1125398098962993,
          "rotation": 0,
          "target": "2-livingkichen"
        },
        {
          "yaw": 0.009285698109938068,
          "pitch": 0.07843794067616372,
          "rotation": 0,
          "target": "4-master-bedroom"
        },
        {
          "yaw": 1.174429806638793,
          "pitch": 0.07449485856012217,
          "rotation": 0,
          "target": "1-front-house"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-front-house",
      "name": "Front house",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.06378977573747946,
          "pitch": 0.11710247047605193,
          "rotation": 0,
          "target": "2-livingkichen"
        },
        {
          "yaw": -0.681977129461071,
          "pitch": 0.081845614199338,
          "rotation": 0,
          "target": "0-out-door-pool"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-livingkichen",
      "name": "Living+kichen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.4713388156198732,
          "pitch": 0.1849301435953219,
          "rotation": 0,
          "target": "3-front-bed-room"
        },
        {
          "yaw": 2.880922161175395,
          "pitch": 0.3092050762264442,
          "rotation": 0,
          "target": "1-front-house"
        },
        {
          "yaw": -1.4132587322883232,
          "pitch": 0.1730648797858283,
          "rotation": 0,
          "target": "1-front-house"
        },
        {
          "yaw": -0.6687385891050219,
          "pitch": 0.2693571404858943,
          "rotation": 0,
          "target": "0-out-door-pool"
        },
        {
          "yaw": 0.4761739698097376,
          "pitch": 0.3298383003633454,
          "rotation": 0,
          "target": "0-out-door-pool"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-front-bed-room",
      "name": "Front bed room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.8829403259036894,
          "pitch": 0.009367552435261217,
          "rotation": 0,
          "target": "9-bedroom-2"
        },
        {
          "yaw": 1.4734872475102216,
          "pitch": 0.11613469695050505,
          "rotation": 0.7853981633974483,
          "target": "8-bedroom-1"
        },
        {
          "yaw": -2.3897044299088215,
          "pitch": 0.04319299323794468,
          "rotation": 0,
          "target": "10-bathroom-2"
        },
        {
          "yaw": 1.112617923464942,
          "pitch": 0.08032024571956953,
          "rotation": 0,
          "target": "4-master-bedroom"
        },
        {
          "yaw": -0.7920883001627157,
          "pitch": 0.051224162679055496,
          "rotation": 0,
          "target": "2-livingkichen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-master-bedroom",
      "name": "Master bedroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.0285165951600526,
          "pitch": 0.2821442069157385,
          "rotation": 0.7853981633974483,
          "target": "3-front-bed-room"
        },
        {
          "yaw": 1.9821939840486493,
          "pitch": 0.3392456795195802,
          "rotation": 0,
          "target": "5-dressing-room"
        },
        {
          "yaw": -1.2586607536731016,
          "pitch": 0.28338094753191,
          "rotation": 0,
          "target": "0-out-door-pool"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-dressing-room",
      "name": "Dressing room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.123656808666002,
          "pitch": 0.4520303241680885,
          "rotation": 0,
          "target": "4-master-bedroom"
        },
        {
          "yaw": -0.9052354437829973,
          "pitch": 0.3627339003861607,
          "rotation": 4.71238898038469,
          "target": "7-master-bathroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-bathroom-1",
      "name": "ฺฺBathroom 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.6244696403906396,
          "pitch": 0.6697761307788994,
          "rotation": 0,
          "target": "8-bedroom-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-master-bathroom",
      "name": "Master Bathroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.80848936794494,
          "pitch": 0.38752636901788406,
          "rotation": 0,
          "target": "5-dressing-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-bedroom-1",
      "name": "Bedroom 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.9046992396783065,
          "pitch": 0.49765622728781445,
          "rotation": 0,
          "target": "6-bathroom-1"
        },
        {
          "yaw": -0.12405062253563415,
          "pitch": 0.36242604002872625,
          "rotation": 0,
          "target": "3-front-bed-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-bedroom-2",
      "name": "Bedroom 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.0064850747033649014,
          "pitch": 0.41637530573489023,
          "rotation": 0,
          "target": "3-front-bed-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-bathroom-2",
      "name": "Bathroom 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.4311610006669753,
          "pitch": 0.3759873201897186,
          "rotation": 0,
          "target": "3-front-bed-room"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "The Riverside Type B",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
