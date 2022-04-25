{
    type Video = {
        id: string
        title: string
        url: string
        data: string
    }

    // type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
    type VideoMetadata = Omit<Video, 'url' | 'data'>

    // 비디오의 메타데이터만 알고 싶은데 비디오의 바이트 데이터까지 불필요한 데이터를 반환한다.
    function getVideo(id: string): Video {
        return {
            id, title: 'video', url: 'https://...', data: 'byte-data...'
        }
    }

    // Omit 을 사용하여 불필요한 정보를 제외하고 원하는 것만 반환한다.
    function getVideoMetadata(id: string): VideoMetadata {
        return {
            id: id, title: 'title'
        }
    }

    console.log(getVideoMetadata('1'))
}
