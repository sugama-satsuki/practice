import { render, screen } from '@testing-library/react'
import ListWithIcon from '../component/list/list';
import CategoryIcon from '@mui/icons-material/Category';
 

describe('components/listテスト', () => {

    // ListWithIconコンポーネントに渡すデータ
    const listItems: {title: string, description?: string, icon?: React.ReactNode}[] = [
        {title: 'タイトル1'},
        {title: 'タイトル2', description: '説明がきです〜'},
        {title: 'タイトル3', description: 'ディスクリプションです〜', icon: <CategoryIcon fontSize="small" />}
    ]

    /* --  テスト１ -- */
    test('headerDataを渡しヘッダーを表示する', () => {
        // render()関数を使ってコンポーネントを描画（headerDataを渡す）
        const view = render(<ListWithIcon items={listItems} headerData='リストのヘッダーだよ'/>);
        
        // 興味本位でconsole.log
        console.log('view: ', view);
        const listDom = screen.queryByTestId('list-header');
        // ちゃんと返ってくる
        console.log(listDom);
        // nullにならないことを期待する
        expect(listDom).not.toBeNull();
    })

    /* -- テスト２ -- */
    test('headerDataを渡さずヘッダーを表示しない', () => {
        // render()関数を使ってコンポーネントを描画（headerDataを渡さない）
        render(<ListWithIcon items={listItems} />);
        const listDom = screen.queryByTestId('list-header');
        // nullが返ってくる
        console.log(listDom);
        // nullになることを期待する
        expect(listDom).toBeNull();
    })

})

/*
ヘッダーのDOMを取得し、取得できたかどうか
そのテキストがOFFという文字列に等しいかのアサーションを実施

特定のDOMを取得には、`getByRole()`を使用するのですが、
今回、自分のコンポーネント定義の仕方が悪くて、リストのヘッダーもそれ以外もliタグで描いちゃってるので、getByRole('listitem')で指定しちゃうと、
`TestingLibraryElementErrorです： 役割 "listitem" を持つ要素が複数見つかりました。`と怒られちゃいました。
色々調べて、推奨されてはいませんが、とりあえず挙動を確認したいので`getByTestId()`を使うことにしました。
テストで利用したい要素にdata-testid属性に設定した任意の名前でDOMを取得することができます。
https://testing-library.com/docs/queries/bytestid/

コンポーネントのテストをする時は、`render関数`を使用してレンダリングします。



対応するロールについては下記サイトを参考に
https://www.w3.org/TR/html-aria/#docconformance
*/ 