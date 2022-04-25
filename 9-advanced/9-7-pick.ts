{
    type Video = {
        id: string
        title: string
        url: string
        data: string
    }

    // type Pick<T, K extends keyof T> = {
    //     [P in K]: T[P];
    // };
    // Pick utility type -> 기존의 타입에서 원하는 속성과 밸류를 뽑아서 타입을 만들 수 있다.
    type VideoMetadata = Pick<Video, 'id' | 'title'>

    // 비디오의 메타데이터만 알고 싶은데 비디오의 바이트 데이터까지 불필요한 데이터를 반환한다.
    function getVideo(id: string): Video {
        return {
            id, title: 'video', url: 'https://...', data: 'byte-data...'
        }
    }

    // 픽을 사용하여 필요한 정보의 타입을 만들어서 원하는 것만 반환한다.
    function getVideoMetadata(id: string): VideoMetadata {
        return {
            id: id, title: 'title'
        }
    }

    console.log(getVideoMetadata('1'))
}
