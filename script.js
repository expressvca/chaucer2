TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "adjacentPanoramas": [
   {
    "panorama": {
     "adjacentPanoramas": [
      {
       "panorama": "this.panorama_D3E67098_DA26_E2E1_41CB_B22E56DE4650",
       "class": "AdjacentPanorama",
       "backwardYaw": 23.1,
       "yaw": -143.19,
       "distance": 1
      }
     ],
     "partial": false,
     "vfov": 180,
     "id": "panorama_D38045E4_DA26_6221_41B0_C4FAE255073A",
     "hfovMax": 136,
     "hfov": 360,
     "class": "Panorama",
     "pitch": 0,
     "thumbnailUrl": "media/panorama_D38045E4_DA26_6221_41B0_C4FAE255073A_t.jpg",
     "label": "R0011031",
     "cardboardMenu": {
      "class": "Menu",
      "fontFamily": "Arial",
      "rollOverOpacity": 0.8,
      "id": "Menu_CE37B1D9_DE5D_533D_41E7_D6DEAC671D91",
      "label": "Media",
      "backgroundColor": "#404040",
      "rollOverFontColor": "#FFFFFF",
      "rollOverBackgroundColor": "#000000",
      "children": [
       {
        "class": "MenuItem",
        "label": "R0011028",
        "click": "this.mainPlayList.set('selectedIndex', 0)"
       },
       {
        "class": "MenuItem",
        "label": "R0011031",
        "click": "this.mainPlayList.set('selectedIndex', 1)"
       }
      ],
      "opacity": 0.4,
      "selectedFontColor": "#FFFFFF",
      "selectedBackgroundColor": "#202020",
      "fontColor": "#FFFFFF"
     },
     "hfovMin": 120,
     "frames": [
      {
       "thumbnailUrl": "media/panorama_D38045E4_DA26_6221_41B0_C4FAE255073A_t.jpg",
       "sphere": {
        "levels": [
         {
          "class": "ImageResourceLevel",
          "height": 2688,
          "width": 5376,
          "url": "media/panorama_D38045E4_DA26_6221_41B0_C4FAE255073A_hq.jpeg"
         },
         {
          "class": "ImageResourceLevel",
          "height": 2001,
          "width": 4002,
          "url": "media/panorama_D38045E4_DA26_6221_41B0_C4FAE255073A.jpeg"
         }
        ],
        "class": "ImageResource"
       },
       "class": "SphericPanoramaFrame",
       "overlays": [
        {
         "image": {
          "levels": [
           {
            "class": "ImageResourceLevel",
            "height": 3536,
            "width": 3536,
            "url": "media/panorama_D3E67098_DA26_E2E1_41CB_B22E56DE4650_tcap0.png"
           }
          ],
          "class": "ImageResource"
         },
         "class": "TripodCapPanoramaOverlay",
         "rotate": false,
         "hfov": 18,
         "id": "panorama_D38045E4_DA26_6221_41B0_C4FAE255073A_tcap0",
         "angle": 0,
         "inertia": false
        },
        {
         "rollOverDisplay": false,
         "class": "HotspotPanoramaOverlay",
         "data": {
          "label": "Image"
         },
         "enabledInCardboard": true,
         "useHandCursor": true,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "image",
           "click": "this.startPanoramaWithCamera(this.panorama_D3E67098_DA26_E2E1_41CB_B22E56DE4650, this.camera_D0BF1206_DE5D_5117_41BB_30EF91FCB566); this.mainPlayList.set('selectedIndex', 0)"
          }
         ],
         "id": "overlay_D5ACB2AC_DA29_E621_41C2_80E3589650B5",
         "maps": [],
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "yaw": -143.19,
           "hfov": 7.78,
           "image": {
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 170,
              "width": 172,
              "url": "media/panorama_D38045E4_DA26_6221_41B0_C4FAE255073A_0_HS_0_0.png"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -47.52
          }
         ]
        }
       ]
      }
     ]
    },
    "class": "AdjacentPanorama",
    "backwardYaw": -143.19,
    "yaw": 23.1,
    "distance": 1
   }
  ],
  "partial": false,
  "vfov": 180,
  "id": "panorama_D3E67098_DA26_E2E1_41CB_B22E56DE4650",
  "hfovMax": 136,
  "hfov": 360,
  "class": "Panorama",
  "pitch": 0,
  "thumbnailUrl": "media/panorama_D3E67098_DA26_E2E1_41CB_B22E56DE4650_t.jpg",
  "label": "R0011028",
  "cardboardMenu": "this.Menu_CE37B1D9_DE5D_533D_41E7_D6DEAC671D91",
  "hfovMin": 100,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_D3E67098_DA26_E2E1_41CB_B22E56DE4650_t.jpg",
    "sphere": {
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 2688,
       "width": 5376,
       "url": "media/panorama_D3E67098_DA26_E2E1_41CB_B22E56DE4650_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_D3E67098_DA26_E2E1_41CB_B22E56DE4650.jpeg"
      }
     ],
     "class": "ImageResource"
    },
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "image": {
       "levels": [
        {
         "class": "ImageResourceLevel",
         "height": 3536,
         "width": 3536,
         "url": "media/panorama_D3E67098_DA26_E2E1_41CB_B22E56DE4650_tcap0.png"
        }
       ],
       "class": "ImageResource"
      },
      "class": "TripodCapPanoramaOverlay",
      "rotate": false,
      "hfov": 18,
      "id": "panorama_D3E67098_DA26_E2E1_41CB_B22E56DE4650_tcap0",
      "angle": 0,
      "inertia": false
     },
     {
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "data": {
       "label": "Image"
      },
      "enabledInCardboard": true,
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image",
        "click": "this.startPanoramaWithCamera(this.panorama_D38045E4_DA26_6221_41B0_C4FAE255073A, this.camera_CE39E1E7_DE5D_5315_41B0_33F2681A8F61); this.mainPlayList.set('selectedIndex', 1)"
       }
      ],
      "id": "overlay_CA7D1FCE_DA2A_5E61_41E1_12699757979A",
      "maps": [],
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 23.1,
        "hfov": 7.78,
        "image": {
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 170,
           "width": 172,
           "url": "media/panorama_D3E67098_DA26_E2E1_41CB_B22E56DE4650_0_HS_0_0.png"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -47.52
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "class": "PanoramaPlayer",
  "mouseControlMode": "drag_rotation",
  "touchControlMode": "drag_rotation",
  "id": "MainViewerPanoramaPlayer",
  "displayPlaybackBar": true,
  "gyroscopeVerticalDraggingEnabled": true,
  "gyroscopeEnabled": true,
  "viewerArea": "this.MainViewer",
  "preloadEnabled": false
 },
 {
  "idleSequence": {
   "movements": [],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera",
  "manualRotationSpeed": 800,
  "automaticZoomSpeed": 10,
  "timeToIdle": 1500,
  "id": "panorama_D3E67098_DA26_E2E1_41CB_B22E56DE4650_camera",
  "initialPosition": {
   "hfov": 120,
   "class": "PanoramaCameraPosition",
   "yaw": -107.64,
   "pitch": -7.64
  },
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 360,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 5.31
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 "this.panorama_D38045E4_DA26_6221_41B0_C4FAE255073A",
 {
  "idleSequence": {
   "movements": [],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera",
  "manualRotationSpeed": 800,
  "automaticZoomSpeed": 10,
  "timeToIdle": 1500,
  "id": "panorama_D38045E4_DA26_6221_41B0_C4FAE255073A_camera",
  "initialPosition": {
   "hfov": 120,
   "class": "PanoramaCameraPosition",
   "yaw": -44.12,
   "pitch": -3.85
  },
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 360,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 5.31
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "id": "mainPlayList",
  "class": "PlayList",
  "items": [
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_D3E67098_DA26_E2E1_41CB_B22E56DE4650_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "media": "this.panorama_D3E67098_DA26_E2E1_41CB_B22E56DE4650"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_D38045E4_DA26_6221_41B0_C4FAE255073A_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 0); this.setComponentVisibility(this.Image_D1C962BC_DA2E_6621_41EA_86D8DE954A1B, true, -1, this.effect_CAA88EFA_DA7A_BE21_41DD_AEB3A170F2EB, 'showEffect', false)",
    "end": "this.setComponentVisibility(this.Image_D1C962BC_DA2E_6621_41EA_86D8DE954A1B, true, -1, this.effect_CAA89EFB_DA7A_BE27_41E3_73D8EADB21B8, 'showEffect', false); this.setComponentVisibility(this.Image_D1C962BC_DA2E_6621_41EA_86D8DE954A1B, true, -1, this.effect_CAA89EFB_DA7A_BE27_41E3_73D8EADB21B8, 'showEffect', false); this.trigger('tourEnded')",
    "media": "this.panorama_D38045E4_DA26_6221_41B0_C4FAE255073A"
   }
  ]
 },
 "this.Menu_CE37B1D9_DE5D_533D_41E7_D6DEAC671D91",
 {
  "idleSequence": {
   "movements": [
    {
     "yawDelta": 360,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 5.31
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "id": "sequence_CE39F1E7_DE5D_5314_4187_273688BF1C17"
  },
  "class": "PanoramaCamera",
  "manualRotationSpeed": 800,
  "automaticZoomSpeed": 10,
  "timeToIdle": 1500,
  "id": "camera_CE39E1E7_DE5D_5315_41B0_33F2681A8F61",
  "initialPosition": {
   "hfov": 120,
   "class": "PanoramaCameraPosition",
   "yaw": 36.81,
   "pitch": 0
  },
  "initialSequence": "this.sequence_CE39F1E7_DE5D_5314_4187_273688BF1C17"
 },
 {
  "idleSequence": {
   "movements": [
    {
     "yawDelta": 360,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 5.31
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "id": "sequence_D0BEE206_DE5D_5117_41E0_D84FC5C2640D"
  },
  "class": "PanoramaCamera",
  "manualRotationSpeed": 800,
  "automaticZoomSpeed": 10,
  "timeToIdle": 1500,
  "id": "camera_D0BF1206_DE5D_5117_41BB_30EF91FCB566",
  "initialPosition": {
   "hfov": 120,
   "class": "PanoramaCameraPosition",
   "yaw": -156.9,
   "pitch": 0
  },
  "initialSequence": "this.sequence_D0BEE206_DE5D_5117_41E0_D84FC5C2640D"
 },
 {
  "duration": 1000,
  "id": "effect_CAA88EFA_DA7A_BE21_41DD_AEB3A170F2EB",
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 {
  "duration": 1000,
  "id": "effect_CAA89EFB_DA7A_BE27_41E3_73D8EADB21B8",
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 }
], "children": [
 {
  "toolTipBorderRadius": 3,
  "transitionMode": "blending",
  "borderRadius": 0,
  "playbackBarHeadShadowBlurRadius": 3,
  "toolTipShadowOpacity": 1,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarOpacity": 1,
  "toolTipFontColor": "#606060",
  "toolTipPaddingRight": 6,
  "shadow": false,
  "playbackBarHeadShadowHorizontalLength": 0,
  "toolTipFontFamily": "Arial",
  "progressBarOpacity": 1,
  "playbackBarHeadBorderRadius": 0,
  "toolTipShadowSpread": 0,
  "playbackBarHeadBorderColor": "#000000",
  "playbackBarBackgroundColorDirection": "vertical",
  "playbackBarHeadShadowColor": "#000000",
  "progressBorderColor": "#000000",
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "progressBarBorderColor": "#000000",
  "playbackBarHeight": 10,
  "playbackBarRight": 0,
  "toolTipShadowVerticalLength": 0,
  "progressBackgroundColorRatios": [
   0
  ],
  "toolTipTextShadowOpacity": 0,
  "progressBottom": 0,
  "toolTipPaddingTop": 4,
  "progressRight": 0,
  "toolTipTextShadowBlurRadius": 3,
  "progressBarBorderSize": 0,
  "playbackBarLeft": 0,
  "paddingTop": 0,
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "progressOpacity": 1,
  "toolTipPaddingLeft": 6,
  "height": "100%",
  "progressHeight": 10,
  "width": "100%",
  "progressBorderSize": 0,
  "progressBackgroundColorDirection": "vertical",
  "playbackBarHeadOpacity": 1,
  "playbackBarProgressBorderSize": 0,
  "playbackBarHeadShadowVerticalLength": 0,
  "playbackBarProgressBorderRadius": 0,
  "toolTipFontStyle": "normal",
  "toolTipDisplayTime": 600,
  "toolTipOpacity": 1,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "playbackBarHeadShadow": true,
  "progressBarBackgroundColorRatios": [
   0
  ],
  "playbackBarBorderRadius": 0,
  "paddingLeft": 0,
  "toolTipFontSize": 12,
  "id": "MainViewer",
  "playbackBarBottom": 5,
  "paddingBottom": 0,
  "progressBarBorderRadius": 0,
  "playbackBarHeadBorderSize": 0,
  "transitionDuration": 500,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "toolTipBorderColor": "#767676",
  "playbackBarHeadWidth": 6,
  "minHeight": 50,
  "class": "ViewerArea",
  "propagateClick": false,
  "toolTipBackgroundColor": "#F6F6F6",
  "playbackBarProgressOpacity": 1,
  "progressBorderRadius": 0,
  "progressLeft": 0,
  "minWidth": 100,
  "playbackBarHeadHeight": 15,
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "progressBarBackgroundColorDirection": "vertical",
  "toolTipBorderSize": 1,
  "playbackBarProgressBorderColor": "#000000",
  "playbackBarHeadShadowOpacity": 0.7,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "playbackBarBorderColor": "#FFFFFF",
  "toolTipShadowHorizontalLength": 0,
  "toolTipFontWeight": "normal",
  "toolTipShadowBlurRadius": 3,
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "toolTipPaddingBottom": 4,
  "playbackBarBorderSize": 0,
  "toolTipShadowColor": "#333333",
  "toolTipTextShadowColor": "#000000",
  "borderSize": 0,
  "playbackBarBackgroundOpacity": 1,
  "progressBackgroundOpacity": 1,
  "paddingRight": 0,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ]
 },
 {
  "paddingLeft": 0,
  "id": "Image_D1C962BC_DA2E_6621_41EA_86D8DE954A1B",
  "paddingBottom": 0,
  "verticalAlign": "middle",
  "minHeight": 1,
  "class": "Image",
  "backgroundOpacity": 0,
  "propagateClick": false,
  "shadow": false,
  "horizontalAlign": "center",
  "click": "this.openLink(\"http://www.londonshoot.com\", \"_blank\")",
  "minWidth": 1,
  "cursor": "hand",
  "width": "6.538%",
  "data": {
   "name": "Image2133"
  },
  "height": "5.864%",
  "paddingTop": 0,
  "url": "skin/Image_D1C962BC_DA2E_6621_41EA_86D8DE954A1B.png",
  "borderRadius": 0,
  "scaleMode": "fit_inside",
  "left": "0%",
  "borderSize": 0,
  "maxWidth": 1549,
  "paddingRight": 0,
  "maxHeight": 774,
  "top": "0%"
 },
 {
  "transparencyActive": true,
  "paddingLeft": 0,
  "id": "IconButton_CFB89384_DE26_66E1_41E2_4A5E18CD0E3F",
  "toolTipBorderRadius": 3,
  "paddingBottom": 0,
  "mode": "toggle",
  "verticalAlign": "middle",
  "toolTipBorderColor": "#767676",
  "toolTipShadowOpacity": 1,
  "minHeight": 1,
  "toolTip": "Fullscreen",
  "class": "IconButton",
  "toolTipShadowSpread": 0,
  "backgroundOpacity": 0,
  "propagateClick": false,
  "toolTipPaddingRight": 6,
  "shadow": false,
  "toolTipFontFamily": "Arial",
  "horizontalAlign": "center",
  "toolTipFontColor": "#606060",
  "toolTipBackgroundColor": "#F6F6F6",
  "minWidth": 1,
  "toolTipBorderSize": 1,
  "borderRadius": 0,
  "cursor": "hand",
  "width": 49,
  "height": 39,
  "toolTipShadowVerticalLength": 0,
  "toolTipFontWeight": "normal",
  "toolTipTextShadowOpacity": 0,
  "toolTipTextShadowBlurRadius": 3,
  "data": {
   "name": "IconButton1493"
  },
  "toolTipShadowBlurRadius": 3,
  "toolTipPaddingTop": 4,
  "paddingTop": 0,
  "toolTipPaddingBottom": 4,
  "toolTipShadowHorizontalLength": 0,
  "toolTipPaddingLeft": 6,
  "toolTipShadowColor": "#333333",
  "toolTipDisplayTime": 600,
  "toolTipTextShadowColor": "#000000",
  "iconURL": "skin/IconButton_CFB89384_DE26_66E1_41E2_4A5E18CD0E3F.png",
  "borderSize": 0,
  "toolTipFontStyle": "normal",
  "maxWidth": 128,
  "right": "0.21%",
  "paddingRight": 0,
  "toolTipOpacity": 1,
  "maxHeight": 128,
  "toolTipFontSize": 12,
  "top": "0.85%"
 },
 {
  "paddingLeft": 0,
  "id": "Image_D566976A_DE4F_7F1F_41E5_0D50746E474C",
  "paddingBottom": 0,
  "verticalAlign": "middle",
  "borderRadius": 0,
  "minHeight": 1,
  "class": "Image",
  "backgroundOpacity": 0,
  "propagateClick": false,
  "shadow": false,
  "minWidth": 1,
  "horizontalAlign": "center",
  "width": "3.632%",
  "data": {
   "name": "Image1553"
  },
  "height": "6.327%",
  "paddingTop": 0,
  "url": "skin/Image_D566976A_DE4F_7F1F_41E5_0D50746E474C.png",
  "scaleMode": "fit_inside",
  "left": "39.69%",
  "borderSize": 0,
  "maxWidth": 512,
  "paddingRight": 0,
  "maxHeight": 512,
  "top": "0.08%"
 },
 {
  "paddingLeft": 0,
  "id": "Image_D584AEC1_DE53_510D_41CC_23BDB0B45877",
  "paddingBottom": 0,
  "verticalAlign": "middle",
  "borderRadius": 0,
  "minHeight": 1,
  "class": "Image",
  "backgroundOpacity": 0,
  "propagateClick": false,
  "shadow": false,
  "minWidth": 1,
  "horizontalAlign": "center",
  "width": "2.821%",
  "data": {
   "name": "Image1600"
  },
  "height": "6.713%",
  "paddingTop": 0,
  "url": "skin/Image_D584AEC1_DE53_510D_41CC_23BDB0B45877.png",
  "scaleMode": "fit_inside",
  "left": "45.24%",
  "borderSize": 0,
  "maxWidth": 512,
  "paddingRight": 0,
  "maxHeight": 512,
  "top": "0.08%"
 },
 {
  "paddingLeft": 0,
  "id": "Image_D5EBA936_DE55_3377_41E0_19C2F12585E4",
  "paddingBottom": 0,
  "verticalAlign": "middle",
  "borderRadius": 0,
  "minHeight": 1,
  "class": "Image",
  "backgroundOpacity": 0,
  "propagateClick": false,
  "shadow": false,
  "minWidth": 1,
  "horizontalAlign": "center",
  "width": "2.863%",
  "data": {
   "name": "Image1658"
  },
  "height": "6.79%",
  "paddingTop": 0,
  "url": "skin/Image_D5EBA936_DE55_3377_41E0_19C2F12585E4.png",
  "scaleMode": "fit_inside",
  "borderSize": 0,
  "maxWidth": 512,
  "right": "46.97%",
  "paddingRight": 0,
  "maxHeight": 512,
  "top": "0.08%"
 },
 {
  "paddingLeft": 0,
  "id": "Image_D2421A6B_DE57_511D_41E4_8338633CF51E",
  "paddingBottom": 0,
  "verticalAlign": "middle",
  "borderRadius": 0,
  "minHeight": 1,
  "class": "Image",
  "backgroundOpacity": 0,
  "propagateClick": false,
  "shadow": false,
  "minWidth": 1,
  "horizontalAlign": "center",
  "width": "5%",
  "data": {
   "name": "Image1707"
  },
  "height": "7.407%",
  "paddingTop": 0,
  "url": "skin/Image_D2421A6B_DE57_511D_41E4_8338633CF51E.png",
  "scaleMode": "fit_inside",
  "borderSize": 0,
  "maxWidth": 512,
  "right": "40.56%",
  "paddingRight": 0,
  "maxHeight": 512,
  "top": "0.13%"
 }
], 
 "start": "this.mainPlayList.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_CFB89384_DE26_66E1_41E2_4A5E18CD0E3F].forEach(function(component) { component.set('visible', false); }) }",
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "id": "rootPlayer",
 "paddingBottom": 0,
 "scripts": {
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "pauseGlobalAudios": function(caller, exclude){  var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if(window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); if(window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; var objs = window.pauseGlobalAudiosState[caller]; if(objs == undefined){ objs = []; window.pauseGlobalAudiosState[caller] = objs; } for (var i = 0, count = audios.length; i<count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); objs.push(a); } } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "getKey": function(key){  return window[key]; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "registerKey": function(key, value){  window[key] = value; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "autotriggerAtStart": function(playListItem, callback, once){  var onPlaylistBegin = function(event){ callback(); if(once == true) playListItem.unbind('begin', onPlaylistBegin, this); }; playListItem.bind('begin', onPlaylistBegin, this); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "existsKey": function(key){  return key in window; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller, exclude){  var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined) return; var objs = window.pauseGlobalAudiosState[caller]; if (objs == undefined) return; delete window.pauseGlobalAudiosState[caller]; if (Object.keys(window.pauseGlobalAudiosState).length > 0) { if (window.restoreGlobalAudiosState == undefined) window.restoreGlobalAudiosState = {}; if (!(caller in window.restoreGlobalAudiosState)) window.restoreGlobalAudiosState[caller] = objs; } else { var restoreFunc = function(objs) { for (var i = 0, count = objs.length; i < count; ++i) { var a = objs[i]; if (a.get('state') == 'paused') a.play(); } }; restoreFunc(objs); if (window.restoreGlobalAudiosState != undefined) { while (window.restoreGlobalAudiosState.length > 0) { restoreFunc(window.restoreGlobalAudiosState.pop()); } window.restoreGlobalAudiosState = undefined; } } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "unregisterKey": function(key){  delete window[key]; },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } }
 },
 "verticalAlign": "top",
 "borderRadius": 0,
 "minHeight": 20,
 "mouseWheelEnabled": true,
 "mobileMipmappingEnabled": true,
 "class": "Player",
 "shadow": false,
 "propagateClick": false,
 "minWidth": 20,
 "buttonToggleFullscreen": "this.IconButton_CFB89384_DE26_66E1_41E2_4A5E18CD0E3F",
 "horizontalAlign": "left",
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000",
 "contentOpaque": false,
 "width": "100%",
 "height": "100%",
 "paddingTop": 0,
 "scrollBarMargin": 2,
 "backgroundPreloadEnabled": true,
 "gap": 10,
 "vrPolyfillScale": 0.5,
 "creationPolicy": "delayed",
 "layout": "absolute",
 "borderSize": 0,
 "desktopMipmappingEnabled": true,
 "data": {
  "name": "Player456"
 },
 "overflow": "visible",
 "paddingRight": 0,
 "scrollBarOpacity": 0.5
})