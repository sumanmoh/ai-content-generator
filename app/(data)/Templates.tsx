export default[
    {
        name:'Blog Title',
        desc:'An AI Tool that generates blog title depends on your blog information',
        category:'Blog',
        icon:'https://cdn-icons-png.flaticon.com/128/3344/3344836.png',
        slug:'generate-blog-title',
        aiPrompt:'Give me 5 blog topic idea in bullet wise only based on given niche & outline and give me result in Rich text editor format',
        form:[
            {
                label:'Enter your blog niche',
                field:'input',
                name:'niche',
                required:true
            },
            {
                label:'Enter blog outline',
                field:'textarea',
                name:'outline',
            }
        ]
    },
    {
        name:'Blog Topic ideas',
        desc:'An AI Tool that generates blog title ideas depending on your blog information',
        category:'Blog',
        icon:'https://cdn-icons-png.flaticon.com/128/11497/11497896.png',
        slug:'blog-topic-ideas',
        aiPrompt:'Give me 5 blog topic idea in bullet wise only based on given niche & outline and give me result in Rich text editor format',
        form:[
            {
                label:'Enter your blog niche',
                field:'input',
                name:'niche',
                required:true
            },
            {
                label:'Enter blog outline',
                field:'textarea',
                name:'outline',
            }
        ]
    },
    {
        name:'Blog Content',
        desc:'An AI Tool that serves as your personal blog post title',
        category:'Blog',
        icon:'https://cdn-icons-png.flaticon.com/128/6114/6114045.png',
        slug:'generate-content-generation',
        aiPrompt:'Generate Blog Content based on topic and outline information',
        form:[
            {
                label:'Enter your blog niche',
                field:'input',
                name:'topic',
                required:true
            },
            {
                label:'Enter blog outline',
                field:'textarea',
                name:'outline',
            }
        ]
    },
    {
        name:'Youtube SEO Title',
        desc:'An AI Tool that serves as your personal blog post title',
        category:'Youtube Tools',
        icon:'https://cdn-icons-png.flaticon.com/128/15302/15302398.png',
        slug:'youtube-seo-title',
        aiPrompt:'Give me Best SEO optimized high ranked 5 title ideas for youtube',
        form:[
            {
                label:'Enter your youtube video topic keywords',
                field:'input',
                name:'Keywords',
                required:true
            },
            {
                label:'Enter youtube description Outline here',
                field:'textarea',
                name:'outline',
            }
        ]
    },
    {
        name:'Youtube Description',
        desc:'An AI Tool that serves as your personal blog post title',
        category:'Youtube Tool',
        icon:'https://cdn-icons-png.flaticon.com/128/10101/10101391.png',
        slug:'youtube-description',
        aiPrompt:'Generate Youtube description with emojis under 4-5 lines',
        form:[
            {
                label:'Enter your blog topic/title',
                field:'input',
                name:'topic',
                required:true
            },
            {
                label:'Enter youtube Outline here',
                field:'textarea',
                name:'outline',
            }
        ]
    },
    {
        name:'Youtube Tags',
        desc:'An AI Tool that serves as your personal blog post title',
        category:'Youtube Tool',
        icon:'https://cdn-icons-png.flaticon.com/128/10884/10884883.png',
        slug:'youtube-tag',
        aiPrompt:'Generate 10 youtube tags in bullet points based on the youtube topic',
        form:[
            {
                label:'Enter your youtube title',
                field:'input',
                name:'title',
                required:true
            },
            {
                label:'Enter youtube video Outline here(Optional)',
                field:'textarea',
                name:'outline',
            }
        ]
    },
    {
        name:'Rewrite Article (Plagiarism Free)',
        desc:'Use this tool to rewrite existing Article or Blog Post',
        category:'Youtube Tool',
        icon:'https://cdn-icons-png.flaticon.com/128/15261/15261752.png',
        slug:'Rewrite-article',
        aiPrompt:'Rewrite give article without any Plagiarism in rich text format',
        form:[
            {
                label:'Provide yout Article/Blogpost or any other based on the topic interest',
                field:'textarea',
                name:'article',
                required:true
            },
        ]
    },
    {
        name:'Text Improver',
        desc:'Use this tool to improve the text of existing Article or Blog Post',
        category:'writing Assitant',
        icon:'https://cdn-icons-png.flaticon.com/128/4021/4021693.png',
        slug:'text-improver',
        aiPrompt:'Given textToImprove ,Rewrite text without any grammer of the given text',
        form:[
            {
                label:'Enter text that you want to re-write or improve .',
                field:'textarea',
                name:'textToImprove'
            },
        ]
    },
    {
        name:'Add Emojis to Text',
        desc:'An AI tool that serves as your personal blog post title writer and adds catchy and viral emojis to it',
        category:'blog',
        icon:'https://cdn-icons-png.flaticon.com/128/1665/1665944.png',
        slug:'add-emoji-to-text',
        aiPrompt:'Add Emoji to outline text depends on outline and rewrite the text',
        form:[
            {
                label:'Enter your text to add emojis .',
                field:'textarea',
                name:'outline',
                required:true
            },
        ]
    },
    {
        name:'Instagram Post Generator',
        desc:'An AI tool that serves as your personal blog post title and adds post to it',
        category:'blog',
        icon:'https://cdn-icons-png.flaticon.com/128/1409/1409946.png',
        slug:'instagram-post-generator',
        aiPrompt:'Add Post to outline text depends on outline and rewrite the text',
        form:[
            {
                label:'Enter your instagram post to be generated .',
                field:'textarea',
                name:'outline',
                required:true
            },
        ]
    },
    {
        name:'Instagram Hash Tag Genearator',
        desc:'An AI tool that serves as your personal blog post title and adds catchy and viral tags to it',
        category:'blog',
        icon:'https://cdn-icons-png.flaticon.com/128/9953/9953229.png',
        slug:'instagram-hash-tag-genearator',
        aiPrompt:'Generate unique and viral hash tags based on the post topic',
        form:[
            {
                label:'Enter your topics of instagram tags to be generated .',
                field:'textarea',
                name:'outline',
                required:true
            },
        ]
    },
    {
        name:'English Grammer Check',
        desc:'An AI tool that serves to check the grammer and corrects it',
        category:'blog',
        icon:'https://cdn-icons-png.flaticon.com/128/12596/12596700.png',
        slug:'english-grammer-check',
        aiPrompt:'Check the grammer of the Sentence given and if there an mistake correct it',
        form:[
            {
                label:'Enter your Sentence to be checked .',
                field:'textarea',
                name:'outline',
                required:true
            },
        ]
    },
    {
        name:'Write Code',
        desc:'An AI tool that serves to generate the code in any language',
        category:'blog',
        icon:'https://cdn-icons-png.flaticon.com/128/11676/11676670.png',
        slug:'write-code',
        aiPrompt:'Generate the code for the given problem',
        form:[
            {
                label:'Enter the Problem for which the code is to be generated .',
                field:'textarea',
                name:'outline',
                required:true
            },
        ]
    },
    {
        name:'Explain Code',
        desc:'An AI Model to explain programming code in any language.',
        category:'blog',
        icon:'https://cdn-icons-png.flaticon.com/128/16903/16903513.png',
        slug:'explain-code',
        aiPrompt:'Explain the code in detail and generate the output',
        form:[
            {
                label:'Enter the code to be explained .',
                field:'textarea',
                name:'outline',
                required:true
            },
        ]
    },
]