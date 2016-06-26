/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
            'montserrat, sans-serif': '<script src=\"http://use.edgefonts.net/montserrat:n4:all.js\"></script>',
            'merriweather, serif': '<script src=\"http://use.edgefonts.net/merriweather:n9,n7,n4,n3:all.js\"></script>'        },
        opts = {
            'gAudioPreloadPreference': 'false',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
            js+"jquery-2.0.3.min.js"
        ],
        symbols = {
            "stage": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [

                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1366', '10000', 'auto', 'auto'],
                            sizeRange: ['0px','undefined','undefined','undefined'],
                            overflow: 'visible',
                            fill: ["rgba(127,53,0,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "s1": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'crib-032',
                            type: 'image',
                            rect: ['0', '0', '1365px', '768px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/crib-03.jpg', '0px', '0px']
                        },
                        {
                            id: 's1Description',
                            type: 'rect',
                            symbolName: 's1Description',
                            rect: ['0', '150', '1365', '435', 'auto', 'auto']
                        },
                        {
                            id: 'scrollDwnIcon',
                            type: 'rect',
                            symbolName: 'scrollDwnIcon',
                            rect: ['633', '630', '100', '110', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1365', '768']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [
                        [
                            "eid6",
                            "top",
                            0,
                            0,
                            "linear",
                            "${s1Description}",
                            '150px',
                            '150px'
                        ]
                    ]
                }
            },
            "s2": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'crib-07',
                            type: 'image',
                            rect: ['0px', '0px', '1365px', '768px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/crib-07.jpg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1365', '768']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "s4x": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'crib-04',
                            type: 'image',
                            rect: [0, 0, '1365px', '768px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/crib-04.jpg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 1365, 768]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "s3x": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'crib-02',
                            type: 'image',
                            rect: [0, 0, '1365px', '768px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/crib-02.jpg', '0px', '0px']
                        },
                        {
                            id: 'S3a',
                            type: 'image',
                            rect: [0, 0, '387px', '768px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S3a.jpg', '0px', '0px']
                        },
                        {
                            id: 's3Txt',
                            type: 'rect',
                            rect: ['387', '271', 977, 321, 'auto', 'auto'],
                            symbolName: 's3Txt'
                        },
                        {
                            id: 'PlaypenLogo',
                            type: 'image',
                            rect: [468, 0, '430px', '262px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/PlaypenLogo.png', '0px', '0px']
                        },
                        {
                            id: 'S3b',
                            type: 'image',
                            rect: [1365, 432, '362px', '306px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S3b.jpg', '0px', '0px']
                        },
                        {
                            id: 'S3c',
                            type: 'image',
                            rect: [1469, 108, '344px', '321px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S3c.jpg', '0px', '0px']
                        },
                        {
                            id: 'S3d',
                            type: 'image',
                            rect: [1813, 191, '530px', '521px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S3d.jpg', '0px', '0px']
                        },
                        {
                            id: 'S3e',
                            type: 'image',
                            rect: [2343, 0, '650px', '768px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S3e.jpg', '0px', '0px']
                        },
                        {
                            id: 'S3f',
                            type: 'image',
                            rect: [2993, 65, '365px', '638px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S3f.jpg', '0px', '0px']
                        },
                        {
                            id: 'S3g',
                            type: 'image',
                            rect: [3290, 381, '370px', '277px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S3g.jpg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 1366, 768]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "s5": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'crib-03',
                            type: 'image',
                            rect: ['0', '0', '1365px', '768px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/crib-03.jpg', '0px', '0px']
                        },
                        {
                            rect: ['1379', '0', '300', '768px', 'auto', 'auto'],
                            id: 'rectClipShadow',
                            stroke: [0, 'rgba(255,255,255,0.00)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            id: 's5Txt',
                            symbolName: 's5Txt',
                            rect: ['1309', '78', '977', '641', 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            id: 'crib-03b',
                            type: 'image',
                            rect: ['0', '0', '1365px', '768px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/crib-03b.jpg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1365', '768']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "s6": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'crib-24',
                            type: 'image',
                            rect: [0, 0, '1365px', '768px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/crib-24.jpg', '0px', '0px']
                        },
                        {
                            id: 'fiveYrsAgo',
                            type: 'rect',
                            symbolName: 'fiveYrsAgo',
                            rect: [0, 0, 1366, 768, 'auto', 'auto']
                        },
                        {
                            id: 'crib-25',
                            type: 'image',
                            rect: [0, 768, '1365px', '768px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/crib-25.jpg', '0px', '0px']
                        },
                        {
                            id: 'crib-26',
                            type: 'image',
                            rect: [0, 1536, '1365px', '768px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/crib-26.jpg', '0px', '0px']
                        },
                        {
                            id: 'crib-27',
                            type: 'image',
                            rect: [0, '2304', '1365px', '768px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/crib-27.jpg', '0px', '0px']
                        },
                        {
                            id: 'thankYou',
                            type: 'rect',
                            symbolName: 'thankYou',
                            rect: [0, 3072, 1366, 1536, 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'visible',
                            rect: [null, null, 1365, 4608]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "s1Description": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0', '0', '1365px', '435', 'auto', 'auto'],
                            id: 'DescriptionBG',
                            stroke: [0, 'rgba(192,192,192,0.00)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,0.00)', [270, [['rgba(192,192,192,0.00)', 0], ['rgba(0,0,0,0.80)', 32], ['rgba(0,0,0,0.65)', 56], ['rgba(0,0,0,0.00)', 100]]]]
                        },
                        {
                            font: ['\'Palatino Linotype\', \'Book Antigua\', Palatino, serif', [26, 'px'], 'rgba(240,235,219,1.00)', '300', 'none', 'italic', 'break-word', ''],
                            type: 'text',
                            text: 'Playpens were traditionally made of wood, and consisted of a flat rectangular platform, usually square in shape, with vertical bars on four sides, so that the child can see out. The floor of the playpen is usually a soft mat. <br><br>The walls of the playpen are usually higher than the height of the child, so as to avoid climbing injuries; playpens may also have a detachable lid. There are many more modern and portable designs.<br><br><br>But of course I want my own design.',
                            id: 's1DescTxt',
                            textStyle: ['1px', '', '', ''],
                            align: 'center',
                            rect: ['201', '135', '976px', '210', 'auto', 'auto']
                        },
                        {
                            font: ['\'Palatino Linotype\', \'Book Antigua\', Palatino, serif', [12, 'px'], 'rgba(240,235,219,1)', '300', 'none', 'normal', 'break-word', ''],
                            type: 'text',
                            id: 'Text',
                            text: 'WIKIPEDIA',
                            align: 'center',
                            rect: ['503', '340', '371px', '26px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1365', '435']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "s3Txt": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'Rectangle',
                            stroke: [0, 'rgba(192, 192, 192, 0)', 'none'],
                            rect: [0, 0, 977, '321px', 'auto', 'auto'],
                            fill: ['rgba(192,192,192,0)', [0, [['rgba(191,51,1,0.77)', 10], ['rgba(168,71,2,0.00)', 100]]]]
                        },
                        {
                            type: 'text',
                            rect: [41, 29, '631px', 44, 'auto', 'auto'],
                            align: 'left',
                            id: 's3Title',
                            textStyle: ['2px', '', '', ''],
                            text: 'EXPOSED JOINERIES',
                            font: ['montserrat, sans-serif', [32, 'px'], 'rgba(240,235,219,1)', '700', 'none', 'normal', '', '']
                        },
                        {
                            type: 'text',
                            rect: [41, 81, 765, 213, 'auto', 'auto'],
                            align: 'left',
                            id: 's3Descript',
                            textStyle: ['0.25px', '', '39px', ''],
                            text: 'I like creating exposed through &amp; tenon joinery held by opposing wedges. It\'s a very practical and adaptable joinery for different environments. This joinery allows the wood to breath, it can expand and contract freely. Just give it a tap or two to adjust the fittings.',
                            font: ['\'Palatino Linotype\', \'Book Antigua\', Palatino, serif', [26, ''], 'rgba(240,235,219,1)', '300', 'none', 'italic', '', '']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 977, 321]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "mainScreen": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 's1',
                            rect: ['0', '0', '1365', '768', 'auto', 'auto'],
                            symbolName: 's1',
                            type: 'rect'
                        },
                        {
                            id: 's2',
                            rect: ['0', '768', '1365', '768', 'auto', 'auto'],
                            symbolName: 's2',
                            type: 'rect'
                        },
                        {
                            type: 'rect',
                            overflow: 'hidden',
                            id: 's3',
                            symbolName: 's3',
                            rect: ['0', '1536', '1365', '768', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            overflow: 'hidden',
                            id: 's4',
                            symbolName: 's4',
                            rect: ['0', '2304', '1365', '768', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            overflow: 'hidden',
                            id: 's5',
                            symbolName: 's5',
                            rect: ['0', '3072', '1365', '768', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            overflow: 'visible',
                            id: 's6',
                            symbolName: 's6',
                            rect: ['0px', '3840px', '1365', '4608', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1366', '10000']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "s1Title": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'GradBG',
                            stroke: [0, 'rgba(192, 192, 192, 0)', 'none'],
                            rect: [0, '0px', 1366, '307px', 'auto', 'auto'],
                            fill: ['rgba(192,192,192,0)', [270, [['rgba(0,0,0,0.90)', 0], ['rgba(0,0,0,0.00)', 100]]]]
                        },
                        {
                            id: 'PlaypenLogo',
                            type: 'image',
                            rect: [468, 0, '430px', '262px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/PlaypenLogo.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 1366, 262]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "s3": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'crib-02',
                            type: 'image',
                            rect: ['0', '0', '1365px', '768px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/crib-02.jpg', '0px', '0px']
                        },
                        {
                            rect: ['0', '0', '1366', '768', 'auto', 'auto'],
                            id: 'darkBG',
                            stroke: [0, 'rgba(255,255,255,0.00)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,0.50)']
                        },
                        {
                            id: 's3a',
                            type: 'image',
                            rect: ['0', '0', '387px', '768px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S3a.jpg', '0px', '0px']
                        },
                        {
                            id: 's3Txt',
                            type: 'rect',
                            symbolName: 's3Txt',
                            rect: ['387', '271', '977', '321', 'auto', 'auto']
                        },
                        {
                            id: 's3b',
                            type: 'image',
                            rect: ['1365', '432', '362px', '306px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S3b.jpg', '0px', '0px']
                        },
                        {
                            id: 's3c',
                            type: 'image',
                            rect: ['1469', '108', '344px', '321px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S3c.jpg', '0px', '0px']
                        },
                        {
                            id: 's3d',
                            type: 'image',
                            rect: ['1813', '191', '530px', '521px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S3d.jpg', '0px', '0px']
                        },
                        {
                            id: 's3e',
                            type: 'image',
                            rect: ['2343', '0', '650px', '768px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S3e.jpg', '0px', '0px']
                        },
                        {
                            id: 's3f',
                            type: 'image',
                            rect: ['2993', '90', '365px', '638px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S3f.jpg', '0px', '0px']
                        },
                        {
                            id: 's3g',
                            type: 'image',
                            rect: ['3290', '406', '370px', '277px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S3g.jpg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1365', '768']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "s4": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'crib-01',
                            type: 'image',
                            rect: ['0', '0', '1365px', '768px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/crib-01.jpg', '0px', '0px']
                        },
                        {
                            id: 'crib-04',
                            type: 'image',
                            rect: ['3084', '0', '1365px', '768px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/crib-04.jpg', '0px', '0px']
                        },
                        {
                            id: 's4a',
                            symbolName: 's4a',
                            rect: ['1397', '0', '1366', '768', 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            id: 's4b',
                            type: 'image',
                            rect: ['5573', '-994', '859px', '768px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/s4b.jpg', '0px', '0px']
                        },
                        {
                            id: 's4c',
                            type: 'image',
                            rect: ['4449', '0', '1017px', '768px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/s4c.jpg', '0px', '0px']
                        },
                        {
                            id: 's4d',
                            type: 'image',
                            rect: ['5466', '0', '1215px', '768px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/s4d.jpg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1365', '768']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "s4a": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 's4a',
                            type: 'image',
                            rect: [0, 0, '720px', '768px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/s4a.jpg', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            id: 'Rectangle',
                            stroke: [0, 'rgba(192, 192, 192, 0)', 'none'],
                            rect: [720, 0, 646, 768, 'auto', 'auto'],
                            fill: ['rgba(192,192,192,0)', [0, [['rgba(191,51,1,0.77)', 10], ['rgba(168,71,2,0.00)', 100]]]]
                        },
                        {
                            type: 'text',
                            rect: [761, 304, 543, 44, 'auto', 'auto'],
                            align: 'left',
                            id: 's4Title',
                            textStyle: ['2px', '', '', ''],
                            text: 'PHILIPPINE MAHOGANY',
                            font: ['montserrat, sans-serif', [32, 'px'], 'rgba(240,235,219,1)', 'bold', 'none', 'normal', '', '']
                        },
                        {
                            type: 'text',
                            rect: [761, 352, 543, 372, 'auto', 'auto'],
                            align: 'left',
                            id: 's4Descript',
                            textStyle: ['0.25px', '', '39px', ''],
                            text: 'Botanically, the name refers to the species Toona Calantas in the mahogany family Meliaceae. <br>I love working with this wood. Medium density and it takes chisel rather well.',
                            font: ['\'Palatino Linotype\', \'Book Antigua\', Palatino, serif', [26, ''], 'rgba(240,235,219,1)', '300', 'none', 'italic', '', '']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 1366, 768]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "s5Txt": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0', '0', '977', '641', 'auto', 'auto'],
                            id: 'Rectangle',
                            stroke: [0, 'rgba(192, 192, 192, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,0)', [0, [['rgba(191,51,1,0.77)', 10], ['rgba(168,71,2,0.00)', 100]]]]
                        },
                        {
                            type: 'text',
                            rect: ['41', '288', '799px', '44', 'auto', 'auto'],
                            textStyle: ['2px', '', '', ''],
                            id: 's5Title',
                            text: 'TRYING IT OUT',
                            align: 'left',
                            font: ['montserrat, sans-serif', [32, 'px'], 'rgba(240,235,219,1)', 'bold', 'none', 'normal', 'break-word', '']
                        },
                        {
                            type: 'text',
                            rect: ['41', '340', '799px', '213', 'auto', 'auto'],
                            textStyle: ['0.25px', '', '39px', ''],
                            id: 's5Descript',
                            text: 'Not just for babys, for mommys too.<br>Testing it for rigidity. When my son and two of his cousins were playing inside the pen, one of the stile broke from getting kicked. So, I added a spine on each stile to make it stronger and still keep the design light.',
                            align: 'left',
                            font: ['\'Palatino Linotype\', \'Book Antigua\', Palatino, serif', [26, ''], 'rgba(240,235,219,1)', '300', 'none', 'italic', 'break-word', '']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '977', '641']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "fiveYrsAgo": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 0, 1366, '768px', 'auto', 'auto'],
                            id: 'fiveYrsAgoBG',
                            stroke: [0, 'rgba(192, 192, 192, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(140,37,0,0.75)']
                        },
                        {
                            font: ['montserrat, sans-serif', [32, 'px'], 'rgba(240,235,219,1)', 'bold', 'none', 'normal', '', ''],
                            type: 'text',
                            align: 'center',
                            id: 'y5Title',
                            textStyle: ['2px', '', '', ''],
                            text: 'PASS IT ON',
                            rect: [203, 370, 959, 44, 'auto', 'auto']
                        },
                        {
                            font: ['\'Palatino Linotype\', \'Book Antigua\', Palatino, serif', [26, ''], 'rgba(240,235,219,1)', '300', 'none', 'italic', '', ''],
                            type: 'text',
                            align: 'center',
                            id: 'y5Descript',
                            textStyle: ['0.25px', '', '39px', ''],
                            text: 'I built this playpen or crib when my older son was born and now we\'re going to need it again for my second son. Took it out of the storage and surprisingly it didn\'t have that much damage. It just needed some cleaning and some minor repairs.',
                            rect: [175, 438, 1016, 164, 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 1366, 768]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "thankYou": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0', '0', '1366', '1536', 'auto', 'auto'],
                            id: 'thankYouBG',
                            stroke: [0, 'rgba(192, 192, 192, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(140,37,0,0.30)', [270, [['rgba(191,51,1,0.75)', 0], ['rgba(42,17,0,0.75)', 35], ['rgba(191,51,1,0.40)', 60], ['rgba(168,71,2,0.00)', 99]]]]
                        },
                        {
                            type: 'text',
                            rect: ['203', '330', '959', '44', 'auto', 'auto'],
                            textStyle: ['2px', '', '', ''],
                            id: 'tYTitle',
                            text: 'THANK YOU FOR VIEWING',
                            align: 'center',
                            font: ['montserrat, sans-serif', [32, 'px'], 'rgba(240,235,219,1)', 'bold', 'none', 'normal', 'break-word', '']
                        },
                        {
                            type: 'text',
                            rect: ['166', '401', '1034', '164', 'auto', 'auto'],
                            textStyle: ['0.25px', '', '39px', ''],
                            id: 'tYDescript',
                            text: 'Built this site as one of my coding projects. It\'s an experimental site for figuring out how the scrolling works. This one page design is what was known as a brochure site in the early days of website design. The difference now of course is the ability to code the page fluidly in response to the user\'s action. ',
                            align: 'center',
                            font: ['\'Palatino Linotype\', \'Book Antigua\', Palatino, serif', [26, ''], 'rgba(240,235,219,1)', '300', 'none', 'italic', 'break-word', '']
                        },
                        {
                            rect: ['203', '768', '960px', '71px', 'auto', 'auto'],
                            id: 'logoGD',
                            type: 'image',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/RLloydGonzales2_Footer.png', '0px', '0px']
                        },
                        {
                            id: 'logoFB',
                            type: 'image',
                            rect: ['653', '901', '60px', '60px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/FB-CircleLogo.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1366', '1536']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "dynBtns": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 0, 12, 12, 'auto', 'auto'],
                            id: 'Rectangle',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 12, 12]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "btn": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0', '0', '10', '10', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'circleBtn',
                            stroke: [1, 'rgba(255,255,255,1.00)', 'solid'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            rect: ['15', '0', '135', '12px', 'auto', 'auto'],
                            textStyle: ['2px', '', '', ''],
                            id: 'btnText',
                            text: '',
                            font: ['montserrat, sans-serif', [10, 'px'], 'rgba(240,235,219,1.00)', '600', 'none', '', 'break-word', ''],
                            type: 'text'
                        },
                        {
                            rect: ['2', '2', '8', '8', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'circle',
                            stroke: [0, 'rgba(255,255,255,0.00)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(0,190,255,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '150', '12']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "siteBackground": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0', '0', '100%', '100%', 'auto', 'auto'],
                            id: 'imgBGgrad',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0)', [50, 50, 'true', 'farthest-corner', [['rgba(0,0,0,0.00)', 42], ['rgba(0,0,0,1.00)', 89]]]]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '100%', '100%']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "scrollDwnIcon": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'scrollDownIcon',
                            type: 'image',
                            rect: [17, 14, '66px', '108px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/scrollDownIcon.png', '0px', '0px']
                        },
                        {
                            type: 'text',
                            rect: [-13, 0, 126, 'auto', 'auto', 'auto'],
                            id: 'Text',
                            text: 'SCROLL DOWN',
                            align: 'center',
                            font: ['Arial, Helvetica, sans-serif', [12, 'px'], 'rgba(240,235,219,1.00)', 'normal', 'none', '', '', '']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 100, 110]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "redWallBG": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'wall_red',
                            type: 'image',
                            rect: ['0px', '0px', '1366px', '910px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/wall_red.gif', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1366px', '910px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "verticalBorder": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'borderLeft',
                            type: 'image',
                            rect: ['0px', '0px', '18px', '2000px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/border.jpg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '18px', '2000px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "audioBtn": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '10', '10', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'circleBtn',
                            stroke: [1, 'rgba(255,255,255,1.00)', 'solid'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            rect: ['15px', '0px', '135', '12px', 'auto', 'auto'],
                            textStyle: ['2px', '', '', ''],
                            id: 'btnText',
                            text: '',
                            font: ['montserrat, sans-serif', [10, 'px'], 'rgba(240,235,219,1.00)', '600', 'none', '', 'break-word', ''],
                            type: 'text'
                        },
                        {
                            rect: ['2px', '2px', '8', '8', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'circle',
                            stroke: [0, 'rgba(255,255,255,0.00)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(0,190,255,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '150px', '12px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "audioController": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'audioClassController',
                            symbolName: 'audioClassController',
                            rect: ['0%', '0%', '320', '45', 'auto', 'auto'],
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '320px', '45px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "rectContainer": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [

                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '10px', '10px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "horLine1Background": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'horLine12',
                            type: 'image',
                            rect: ['0%', '0%', '500px', '2px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/horLine1.gif', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '500px', '2px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "horLines3Background": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'horLine3',
                            type: 'image',
                            rect: ['0%', '0%', '100px', '10px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/horLine3.gif', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '100px', '10px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "audioClassController": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'audio',
                            source: ['media/Pachabelly.mp3', 'media/Pachabelly.ogg'],
                            id: 'Pachabelly3',
                            preload: 'auto',
                            rect: ['0%', '0%', '320px', '45px', 'auto', 'auto'],
                            title: 'Audio',
                            volume: '0.25',
                            display: 'block',
                            userClass: 'audioClass',
                            tag: 'audio'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '320px', '45px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [
                        [
                            "eid11",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Pachabelly3}",
                            'block',
                            'block'
                        ]
                    ]
                }
            },
            "bgSquares1": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'bgSquares1',
                            type: 'image',
                            rect: ['0%', '0%', '100px', '100px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/bgSquares1.gif', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '100px', '100px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "bgSquares2": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'bgSquares2',
                            type: 'image',
                            rect: ['0%', '0%', '100px', '100px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/bgSquares2.gif', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '100px', '100px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "horLines4": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'horLine4',
                            type: 'image',
                            rect: ['0%', '0%', '100px', '100px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/horLine4.gif', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '100px', '100px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "colorSquareContainer": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0%', '0%', '100px', '100px', 'auto', 'auto'],
                            userClass: 'rect',
                            id: 'Rectangle',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(191,51,1,1.00)']
                        },
                        {
                            rect: ['0%', '0%', '100px', '100px', 'auto', 'auto'],
                            userClass: 'rect',
                            id: 'RectGrad',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.00)', [270, [['rgba(255,255,255,0.00)', 0], ['rgba(0,0,0,1.00)', 72]]]]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '100px', '100px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("playPen7_edgeActions.js");
})("GD_RESPONSIVEPARALLAX");
