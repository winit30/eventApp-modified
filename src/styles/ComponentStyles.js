const style = {
    viewEvent: {
        titleCont: {
            backgroundColor: "#ffffff",
            padding: 16
        },

        title: {
            fontWeight: "500",
            color: "#333333"
        },

        info : {
          backgroundColor: "#ffffff",
          padding: 16
        },

        date: {
          fontSize:10,
          paddingVertical:8,
          color: "#333333"
        },

        category: {
          paddingVertical:8,
          color: "#333333"
        },

        description: {
          paddingVertical:8,
          color: "#333333"
        },

        commentBox: {
            padding:16,
            backgroundColor: "#cccccc"
        },

        showComments: {
            padding:16,
            backgroundColor: "#fefefe"
        }
    },

    BottomToolBar: {
        wrapper: {
            backgroundColor: '#ffffff',
            flexDirection: 'row',
            bottom: 0,
            left: 0,
            right: 0,
            position:"absolute",
            alignItems: 'stretch',
            flex: 1
        },

        columnWrap: {
            flex: 1,
            paddingVertical: 8
        },
    }
}

export default style;
