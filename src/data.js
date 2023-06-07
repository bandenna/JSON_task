import { useState } from "react";
const data =
{
    id: 'clid49jsy259622y5osegh4ytbb',
    OrganisationName: 'the8800',
    OrganisationID: 118165778,
    ProjectID: [
        {
            id: 'clid49mnd260215y5osfgvu1syk',
            ProjectID: 575984187,
            ProjectName: 'nestjs-cqrs-sample',
            IssueID: [],
            PullRequestID: []
        },
        {
            id: 'clid49mod260261y5osb19jkf8u',
            ProjectID: 580403392,
            ProjectName: 'desktop-app',
            IssueID: [
                { IssueID: 1658507747, state: 'open' },
                { IssueID: 1658504286, state: 'open' }
            ],
            PullRequestID: [
                {
                    PullRequestId: 1305656056,
                    State: 'open'
                },
                {
                    PullRequestId: 1305653149,
                    State: 'open'
                }
            ]
        },
        {
            id: 'clid49moy260307y5os3k8slnav',
            ProjectID: 580459856,
            ProjectName: 'servers',
            IssueID: [
                { IssueID: 1658507747, state: 'close' },
                { IssueID: 1658504286, state: 'close' }
            ],
            PullRequestID: [
                {
                    PullRequestId: 1305656056,
                    State: 'closed'
                },
                {
                    PullRequestId: 1305653149,
                    State: 'open'
                }
            ]
        },
        {
            id: 'clid49mpi260353y5os3q2jrgpj',
            ProjectID: 580654852,
            ProjectName: 'demo-repository',
            IssueID: [
                { IssueID: 1658507747, state: 'open' },
                { IssueID: 1658504286, state: 'closed' }
            ],
            PullRequestID: [
                {
                    PullRequestId: 1305656056,
                    State: 'close'
                },
                {
                    PullRequestId: 1305653149,
                    State: 'open'
                }
            ]
        },
        {
            id: 'clid49mq0260399y5os35d63ayg',
            ProjectID: 585143400,
            ProjectName: 'editor-extensions',
            IssueID: [
                { IssueID: 1658507747, state: 'close' },
                { IssueID: 1658504286, state: 'open' }
            ],
            PullRequestID: [
                {
                    PullRequestId: 1305656056,
                    State: 'merged'
                },
                {
                    PullRequestId: 1305653149,
                    State: 'close'
                }
            ]
        },
        {
            id: 'clid49mqe260445y5osep05r87z',
            ProjectID: 585159017,
            ProjectName: 'nextjs-sample',
            IssueID: [
                { IssueID: 1658507747, state: 'open' },
                { IssueID: 1658504286, state: 'open' }
            ],
            PullRequestID: [
                {
                    PullRequestId: 1305656056,
                    State: 'open'
                },
                {
                    PullRequestId: 1305653149,
                    State: 'open'
                }
            ]
        },
        {
            id: 'clid49mqx260491y5os97kaiw10',
            ProjectID: 588506747,
            ProjectName: 'login-samples',
            IssueID: [],
            PullRequestID: []
        },
        {
            id: 'clid49mr8260537y5osrke030zu',
            ProjectID: 588542559,
            ProjectName: 'keystone-JS',
            IssueID: [],
            PullRequestID: []
        },
        {
            id: 'clid49mro260583y5osdd35awa0',
            ProjectID: 592771193,
            ProjectName: 'nestjs-apis',
            IssueID: [
                { IssueID: 1658507747, state: 'open' },
                { IssueID: 1658504286, state: 'open' },
                { IssueID: 1658507747, state: 'closed' },
                { IssueID: 1658504286, state: 'open' }
            ],
            PullRequestID: [
                {
                    PullRequestId: 1305656056,
                    State: 'open'
                },
                {
                    PullRequestId: 1305653149,
                    State: 'open'
                },
                {
                    PullRequestId: 1305656056,
                    State: 'merged'
                },
                {
                    PullRequestId: 1305653149,
                    State: 'closed'
                }
            ]
        },
        {
            id: 'clid49ms5260629y5osmo89t9dh',
            ProjectID: 595446609,
            ProjectName: 'web-mono',
            IssueID: [],
            PullRequestID: []
        },
        {
            id: 'clid49msm260675y5osx0wahfp5',
            ProjectID: 598134572,
            ProjectName: 'next-relay',
            IssueID: [],
            PullRequestID: []
        },
        {
            id: 'clid49mt5260721y5osm7l3lx92',
            ProjectID: 599465265,
            ProjectName: 'api-mono',
            IssueID: [],
            PullRequestID: []
        },
        {
            id: 'clid49mtm260767y5oshq0js7sn',
            ProjectID: 603735302,
            ProjectName: 'nestgit-sample',
            IssueID: [{ IssueID: 1595138167, state: 'open' }],
            PullRequestID: [
                {
                    PullRequestId: 1250166121,
                    State: 'open'
                }
            ]
        },
        {
            id: 'clid49mtz260813y5oswcdvgic6',
            ProjectID: 608515057,
            ProjectName: 'peerjs-server',
            IssueID: [],
            PullRequestID: []
        },
        {
            id: 'clid49mup260905y5osz055too0',
            ProjectID: 647216785,
            ProjectName: 'keystone-nest',
            IssueID: [
                { IssueID: 1658507747, state: 'close' },
                { IssueID: 1658504286, state: 'open' },
                { IssueID: 1658507747, state: 'closed' },
                { IssueID: 1658504286, state: 'open' }
            ],
            PullRequestID: [
                {
                    PullRequestId: 1305656056,
                    State: 'merged'
                },
                {
                    PullRequestId: 1305653149,
                    State: 'open'
                },
                {
                    PullRequestId: 1305656056,
                    State: 'merged'
                },
                {
                    PullRequestId: 1305653149,
                    State: 'closed'
                }
            ]
        },
        {
            id: 'clid49mud260859y5osk1hg2qyv',
            ProjectID: 634471524,
            ProjectName: 'nest-code',
            IssueID: [],
            PullRequestID: []
        }
    ]
}
const data2 =
{
    id: 'clid49jsy259622y5osegh4ytbb',
    OrganisationName: 'the8800',
    ProjectID: [
        {
            ProjectID: 575984187,
            ProjectName: 'nestjs-cqrs-sample',
            CommitID: []
        },
        {
            ProjectID: 580403392,
            ProjectName: 'desktop-app',
            CommitID: [
                {
                    Month: "Jan",
                    totalChanges: 3,
                    filesCount: 1,
                    linesAdded: 2,
                    linesDeleted: 1
                },
                {
                    Month: "Feb",
                    totalChanges: 299,
                    filesCount: 10,
                    linesAdded: 247,
                    linesDeleted: 52
                },
                {
                    Month: "Mar",
                    totalChanges: 182,
                    filesCount: 7,
                    linesAdded: 164,
                    linesDeleted: 18
                },
                {
                    Month: "Apr",
                    totalChanges: 1345,
                    filesCount: 8,
                    linesAdded: 755,
                    linesDeleted: 590
                },
                {
                    Month: "May",
                    totalChanges: 1112,
                    filesCount: 10,
                    linesAdded: 689,
                    linesDeleted: 423
                },
                {
                    Month: "Jun",
                    totalChanges: 1,
                    filesCount: 1,
                    linesAdded: 0,
                    linesDeleted: 1
                },
                {
                    Month: "Jul",
                    totalChanges: 5,
                    filesCount: 1,
                    linesAdded: 3,
                    linesDeleted: 2
                },
                {
                    Month: "Aug",
                    totalChanges: 179,
                    filesCount: 4,
                    linesAdded: 92,
                    linesDeleted: 87
                }
            ]
        },
        {
            ProjectID: 580459856,
            ProjectName: 'servers',
            CommitID: [
                {
                    Month: "Jan",
                    totalChanges: 158,
                    filesCount: 3,
                    linesAdded: 158,
                    linesDeleted: 0
                },
                {
                    Month: "Feb",
                    totalChanges: 9,
                    filesCount: 1,
                    linesAdded: 8,
                    linesDeleted: 1
                },
                {
                    Month: "Mar",
                    totalChanges: 589,
                    filesCount: 4,
                    linesAdded: 454,
                    linesDeleted: 135
                }
            ]
        },
        {
            ProjectID: 580654852,
            ProjectName: 'demo-repository',
            CommitID: []
        },
        {
            ProjectID: 585143400,
            ProjectName: 'editor-extensions',
            CommitID: [
                {
                    Month: "Jan",
                    totalChanges: 877,
                    filesCount: 8,
                    linesAdded: 571,
                    linesDeleted: 306
                },
                {
                    Month: "Feb",
                    totalChanges: 314,
                    filesCount: 9,
                    linesAdded: 187,
                    linesDeleted: 127
                },
                {
                    Month: "Mar",
                    totalChanges: 51,
                    filesCount: 4,
                    linesAdded: 37,
                    linesDeleted: 14
                },
                {
                    Month: "Apr",
                    totalChanges: 51,
                    filesCount: 4,
                    linesAdded: 37,
                    linesDeleted: 14
                },
                {
                    Month: "May",
                    totalChanges: 231,
                    filesCount: 8,
                    linesAdded: 128,
                    linesDeleted: 103
                },
                {
                    Month: "Jun",
                    totalChanges: 321,
                    filesCount: 8,
                    linesAdded: 299,
                    linesDeleted: 22
                },
                {
                    Month: "Jul",
                    totalChanges: 13808,
                    filesCount: 12,
                    linesAdded: 897,
                    linesDeleted: 12911
                },
                {
                    Month: "Aug",
                    totalChanges: 22626,
                    filesCount: 8,
                    linesAdded: 15730,
                    linesDeleted: 6896
                },
                {
                    Month: "Sep",
                    totalChanges: 238,
                    filesCount: 4,
                    linesAdded: 181,
                    linesDeleted: 57
                },
                {
                    Month: "Oct",
                    totalChanges: 828,
                    filesCount: 20,
                    linesAdded: 744,
                    linesDeleted: 84
                },
                {
                    Month: "Nov",
                    totalChanges: 149,
                    filesCount: 5,
                    linesAdded: 126,
                    linesDeleted: 23
                },
                {
                    Month: "Dec",
                    totalChanges: 10476,
                    filesCount: 7,
                    linesAdded: 7026,
                    linesDeleted: 3450
                },
                {
                    Month: "Dec",
                    totalChanges: 922,
                    filesCount: 17,
                    linesAdded: 622,
                    linesDeleted: 300
                }
            ]
        },
        {
            ProjectID: 585159017,
            ProjectName: 'nextjs-sample',
            CommitID: [
                {
                    Month: "Jan",
                    totalChanges: 414,
                    filesCount: 17,
                    linesAdded: 346,
                    linesDeleted: 68
                },
                {
                    Month: "Feb",
                    totalChanges: 455,
                    filesCount: 5,
                    linesAdded: 227,
                    linesDeleted: 228
                },
                {
                    Month: "Mar",
                    totalChanges: 462,
                    filesCount: 6,
                    linesAdded: 349,
                    linesDeleted: 113
                },
                {
                    Month: "Apr",
                    totalChanges: 2849,
                    filesCount: 23,
                    linesAdded: 2385,
                    linesDeleted: 464
                },
                {
                    Month: "May",
                    totalChanges: 186,
                    filesCount: 6,
                    linesAdded: 162,
                    linesDeleted: 24
                },
                {
                    Month: "Jun",
                    totalChanges: 413,
                    filesCount: 3,
                    linesAdded: 0,
                    linesDeleted: 413
                },
                {
                    Month: "Jul",
                    totalChanges: 2016,
                    filesCount: 16,
                    linesAdded: 1524,
                    linesDeleted: 492
                },
                {
                    Month: "Aug",
                    totalChanges: 854,
                    filesCount: 7,
                    linesAdded: 634,
                    linesDeleted: 220
                },
                {
                    Month: "Sep",
                    totalChanges: 3316,
                    filesCount: 66,
                    linesAdded: 2881,
                    linesDeleted: 435
                },
                {
                    Month: "Oct",
                    totalChanges: 866,
                    filesCount: 6,
                    linesAdded: 865,
                    linesDeleted: 1
                },
                {
                    Month: "Nov",
                    totalChanges: 3246,
                    filesCount: 15,
                    linesAdded: 3147,
                    linesDeleted: 99
                },
                {
                    Month: "Dec",
                    totalChanges: 11,
                    filesCount: 2,
                    linesAdded: 6,
                    linesDeleted: 5
                },
                {
                    Month: "Jan",
                    totalChanges: 3490,
                    filesCount: 51,
                    linesAdded: 3246,
                    linesDeleted: 244
                },
                {
                    Month: "Feb",
                    totalChanges: 1646,
                    filesCount: 25,
                    linesAdded: 1021,
                    linesDeleted: 625
                },
                {
                    Month: "Mar",
                    totalChanges: 2391,
                    filesCount: 18,
                    linesAdded: 1014,
                    linesDeleted: 1377
                },
                {
                    Month: "Apr",
                    totalChanges: 575,
                    filesCount: 10,
                    linesAdded: 191,
                    linesDeleted: 384
                },
                {
                    Month: "May",
                    totalChanges: 27464,
                    filesCount: 20,
                    linesAdded: 16026,
                    linesDeleted: 11438
                },
                {
                    Month: "Jun",
                    totalChanges: 469,
                    filesCount: 43,
                    linesAdded: 219,
                    linesDeleted: 250
                },
                {
                    Month: "Jul",
                    totalChanges: 16794,
                    filesCount: 56,
                    linesAdded: 339,
                    linesDeleted: 16455
                },
                {
                    Month: "Aug",
                    totalChanges: 921,
                    filesCount: 36,
                    linesAdded: 390,
                    linesDeleted: 531
                },
                {
                    Month: "Sep",
                    totalChanges: 28518,
                    filesCount: 29,
                    linesAdded: 12709,
                    linesDeleted: 15809
                },
                {
                    Month: "Oct",
                    totalChanges: 19099,
                    filesCount: 58,
                    linesAdded: 8272,
                    linesDeleted: 10827
                },
                {
                    Month: "Nov",
                    totalChanges: 1183,
                    filesCount: 34,
                    linesAdded: 742,
                    linesDeleted: 441
                },
                {
                    Month: "Dec",
                    totalChanges: 1204,
                    filesCount: 10,
                    linesAdded: 592,
                    linesDeleted: 612
                },
                {
                    Month: "Jan",
                    totalChanges: 41467,
                    filesCount: 26,
                    linesAdded: 24404,
                    linesDeleted: 17063
                },
                {
                    Month: "Feb",
                    totalChanges: 3418,
                    filesCount: 16,
                    linesAdded: 3251,
                    linesDeleted: 167
                },
                {
                    Month: "Mar",
                    totalChanges: 1584,
                    filesCount: 13,
                    linesAdded: 949,
                    linesDeleted: 635
                },
                {
                    Month: "Apr",
                    totalChanges: 575,
                    filesCount: 10,
                    linesAdded: 191,
                    linesDeleted: 384
                },
                {
                    Month: "May",
                    totalChanges: 224,
                    filesCount: 8,
                    linesAdded: 175,
                    linesDeleted: 49
                },
                {
                    Month: "Jun",
                    totalChanges: 1903,
                    filesCount: 26,
                    linesAdded: 460,
                    linesDeleted: 1443
                },
                {
                    Month: "Jul",
                    totalChanges: 3008,
                    filesCount: 54,
                    linesAdded: 2025,
                    linesDeleted: 983
                },
                {
                    Month: "Aug",
                    totalChanges: 2921,
                    filesCount: 14,
                    linesAdded: 2440,
                    linesDeleted: 481
                },
                {
                    Month: "Sep",
                    totalChanges: 1116,
                    filesCount: 3,
                    linesAdded: 901,
                    linesDeleted: 215
                },
                {
                    Month: "Oct",
                    totalChanges: 1210,
                    filesCount: 10,
                    linesAdded: 997,
                    linesDeleted: 213
                },
                {
                    Month: "Nov",
                    totalChanges: 13019,
                    filesCount: 23,
                    linesAdded: 6811,
                    linesDeleted: 6208
                },
                {
                    Month: "Dec",
                    totalChanges: 4531,
                    filesCount: 59,
                    linesAdded: 2825,
                    linesDeleted: 1706
                },
                {
                    Month: "Jan",
                    totalChanges: 190,
                    filesCount: 3,
                    linesAdded: 107,
                    linesDeleted: 83
                },
                {
                    Month: "Feb",
                    totalChanges: 18420,
                    filesCount: 48,
                    linesAdded: 1493,
                    linesDeleted: 16927
                },
                {
                    Month: "Mar",
                    totalChanges: 37993,
                    filesCount: 48,
                    linesAdded: 4642,
                    linesDeleted: 33351
                },
                {
                    Month: "Apr",
                    totalChanges: 42493,
                    filesCount: 43,
                    linesAdded: 19049,
                    linesDeleted: 23444
                },
                {
                    Month: "May",
                    totalChanges: 2316,
                    filesCount: 33,
                    linesAdded: 1642,
                    linesDeleted: 674
                },
                {
                    Month: "Jun",
                    totalChanges: 52270,
                    filesCount: 28,
                    linesAdded: 23681,
                    linesDeleted: 28589
                },
                {
                    Month: "Jul",
                    totalChanges: 5576,
                    filesCount: 9,
                    linesAdded: 2909,
                    linesDeleted: 2667
                },
                {
                    Month: "Aug",
                    totalChanges: 42931,
                    filesCount: 35,
                    linesAdded: 21957,
                    linesDeleted: 20974
                },
                {
                    Month: "Sep",
                    totalChanges: 3824,
                    filesCount: 7,
                    linesAdded: 3624,
                    linesDeleted: 200
                },
                {
                    Month: "Oct",
                    totalChanges: 40864,
                    filesCount: 10,
                    linesAdded: 23882,
                    linesDeleted: 16982
                },
                {
                    Month: "Nov",
                    totalChanges: 2259,
                    filesCount: 17,
                    linesAdded: 1736,
                    linesDeleted: 523
                },
                {
                    Month: "Dec",
                    totalChanges: 2,
                    filesCount: 1,
                    linesAdded: 1,
                    linesDeleted: 1
                },
                {
                    Month: "Jan",
                    totalChanges: 7919,
                    filesCount: 66,
                    linesAdded: 4653,
                    linesDeleted: 3266
                },
                {
                    Month: "Feb",
                    totalChanges: 44934,
                    filesCount: 35,
                    linesAdded: 22695,
                    linesDeleted: 22239
                },
                {
                    Month: "Mar",
                    totalChanges: 954,
                    filesCount: 8,
                    linesAdded: 410,
                    linesDeleted: 544
                },
                {
                    Month: "Apr",
                    totalChanges: 1585,
                    filesCount: 14,
                    linesAdded: 730,
                    linesDeleted: 855
                },
                {
                    Month: "May",
                    totalChanges: 3369,
                    filesCount: 33,
                    linesAdded: 2933,
                    linesDeleted: 436
                },
                {
                    Month: "Jun",
                    totalChanges: 40495,
                    filesCount: 13,
                    linesAdded: 17884,
                    linesDeleted: 22611
                },
                {
                    Month: "Jul",
                    totalChanges: 1770,
                    filesCount: 8,
                    linesAdded: 1290,
                    linesDeleted: 480
                },
                {
                    Month: "Aug",
                    totalChanges: 37470,
                    filesCount: 17,
                    linesAdded: 21415,
                    linesDeleted: 16055
                },
                {
                    Month: "Sep",
                    totalChanges: 34664,
                    filesCount: 38,
                    linesAdded: 19226,
                    linesDeleted: 15438
                },
                {
                    Month: "Oct",
                    totalChanges: 1062,
                    filesCount: 23,
                    linesAdded: 963,
                    linesDeleted: 99
                },
                {
                    Month: "Nov",
                    totalChanges: 681,
                    filesCount: 12,
                    linesAdded: 466,
                    linesDeleted: 215
                }
            ]
        },
        {
            ProjectID: 588506747,
            ProjectName: 'login-samples',
            CommitID: [
                {
                    Month: "Jan",
                    totalChanges: 1,
                    filesCount: 1,
                    linesAdded: 1,
                    linesDeleted: 0
                },
                {
                    Month: "Feb",
                    totalChanges: 1,
                    filesCount: 1,
                    linesAdded: 1,
                    linesDeleted: 0
                },
                {
                    Month: "Mar",
                    totalChanges: 1,
                    filesCount: 1,
                    linesAdded: 1,
                    linesDeleted: 0
                },
                {
                    Month: "Apr",
                    totalChanges: 1,
                    filesCount: 1,
                    linesAdded: 1,
                    linesDeleted: 0
                },
                {
                    Month: "May",
                    totalChanges: 1,
                    filesCount: 1,
                    linesAdded: 1,
                    linesDeleted: 0
                },
                {
                    Month: "Jun",
                    totalChanges: 1,
                    filesCount: 1,
                    linesAdded: 1,
                    linesDeleted: 0
                },
                {
                    Month: "Jul",
                    totalChanges: 1,
                    filesCount: 1,
                    linesAdded: 1,
                    linesDeleted: 0
                },
                {
                    Month: "Aug",
                    totalChanges: 1,
                    filesCount: 1,
                    linesAdded: 1,
                    linesDeleted: 0
                },
                {
                    Month: "Sep",
                    totalChanges: 1,
                    filesCount: 1,
                    linesAdded: 1,
                    linesDeleted: 0
                },
                {
                    Month: "Oct",
                    totalChanges: 1,
                    filesCount: 1,
                    linesAdded: 1,
                    linesDeleted: 0
                },
                {
                    Month: "Nov",
                    totalChanges: 2,
                    filesCount: 1,
                    linesAdded: 2,
                    linesDeleted: 0
                },
                {
                    Month: "Dec",
                    totalChanges: 2,
                    filesCount: 1,
                    linesAdded: 2,
                    linesDeleted: 0
                },
                {
                    Month: "Jan",
                    totalChanges: 1,
                    filesCount: 1
                }

            ]
        }


    ]
}

const Showdata = () => {
    const displayData = () => {
        const fetchData = data.ProjectID.reduce(
            (each, project) => {
                const { IssueID, PullRequestID } = project;

                IssueID.forEach((issue) => {
                    if (issue.state === 'open') {
                        each.New_Issues++;
                    } else if (issue.state === 'closed') {
                        each.Closed_Issues++;
                    }
                });

                PullRequestID.forEach((pullRequest) => {
                    if (pullRequest.State === 'open') {
                        each.Open_Pull_Requests++;
                    } else if (pullRequest.State === 'closed') {
                        each.closedPullRequest++;
                    } else if (pullRequest.State === 'merged') {
                        each.Merged_Pull_Requests++;
                    }
                });

                return each;
            },
            {
                Closed_Issues: 0,
                closedPullRequest: 0,
                New_Issues: 0,
                Open_Pull_Requests: 0,
                Merged_Pull_Requests: 0,
            }
        );

        console.log(fetchData);
        // second one //
        const secondData = {};

        data2.ProjectID.forEach(project => {
            project.CommitID.forEach(each => {
                const { Month, linesAdded, linesDeleted, totalChanges, filesCount } = each;

                if (secondData[Month]) {
                    secondData[Month].LinesAdded += linesAdded;
                    secondData[Month].LinesDeleted += linesDeleted;
                    secondData[Month].TotalChanges += totalChanges;
                    secondData[Month].FilesCount += filesCount;
                } else {
                    secondData[Month] = {
                        Month,
                        LinesAdded: linesAdded,
                        LinesDeleted: linesDeleted,
                        TotalChanges: totalChanges,
                        FilesCount: filesCount
                    };
                }
            });
        });

        const dataValues = Object.values(secondData);

        console.log(dataValues);


    }


    return (
        <div>

            <button onClick={displayData}>Showdata</button>
        </div>
    )
}
export default Showdata