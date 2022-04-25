{
    type PageInfo = {
        title: string
    }
    type Page = 'home' | 'about' | 'contact'
    // Page 마다 title 이 있어야 한다면?
    // Record 타입 사용하여 각 Page 마다 PageInfo type 이 적용된 타입을 적용한다.
    const nav: Record<Page, PageInfo> = {
        home: {
            'title': 'Home'
        },
        about: {
            'title': 'About'
        },
        contact: {
            'title': 'Contact'
        }
    }
}
