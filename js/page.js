//↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓プレビュー表現↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
function randomText(){
    var text = ["HTML","C#","Unity","Unity","BIM","Grasshopper","OOP","CSS","JS","UGUI","MVVM","Revit","WPF"];
    letters = text[Math.floor(Math.random()*text.length)];
    return letters;
}

function Rain(){
    let container_Info_Preview = document.getElementById("container_Info_Preview");
    if(container_Info_Preview == null){return;}
    let e = document.createElement("div");
    e.classList.add("drop");
    
    container_Info_Preview.appendChild(e);

    let moveRange = Math.floor(Math.random()*380)-190;
    let moveStart = parseInt(getComputedStyle(e).left);
    let size = Math.random()*10;
    let duration = Math.random()*0.5;

    e.innerText=randomText();
    e.style.left = moveStart+moveRange + "px";
    e.style.fontSize=20+size+"px";
    e.style.animationDuration=2+duration+"s";
    setTimeout(function(){
        container_Info_Preview.removeChild(e)
    },6000);
}

setInterval(function(){
    Rain()
},800);
//↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑プレビュー表現↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑

//↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓背景表現↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
let squares_Background= document.querySelectorAll(".square");

console.log(squares_Background.length);

squares_Background.forEach(item =>{
    item.style.visibility="hidden";

    item.innerText=randomText();
    item.style.fontSize=Math.random()*10+10+"px";
    item.addEventListener("animationiteration",()=>{
        item.innerText=randomText();
        item.style.fontSize=Math.random()*10+10+"px";
    });

});
//↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑背景表現↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
//一つ目のページに移動
function InfoPreview_btn_Clicked()
{
    let container_Info = document.getElementById("container_Info");
    let container_Info_Preview = document.getElementById("container_Info_Preview");

    setTimeout(()=>{
        container_Info.classList.remove ("hidden");
    },200);
    container_Info_Preview.classList.add("hidden");
    setTimeout(()=>{
        container_Info_Preview.remove();
    },500);

    //背景表示
    let squares_Background= document.querySelectorAll(".square");
    squares_Background.forEach(item =>{
        item.style.visibility="visible";
    });
    
}

//二つ目のページに移動
function Info_btn_Clicked()
{
    let container_Skill = document.getElementById("container_Skill");
    let container_Portfolio = document.getElementById("container_Portfolio");


    if(getComputedStyle(container_Skill).getPropertyValue("width") === "0px" ){
        container_Skill.classList.remove("hidden");
        console.log("click!!!");
    }
    else 
    {
        container_Skill.classList.add("hidden");
        container_Portfolio.classList.add("hidden");
    }
    
}


//スキルの習得状態の説明展示
const inputs_Programming = document.querySelectorAll('input[name="Programming"]');
const inputs_Unity = document.querySelectorAll('input[name="Unity"]');
const inputs_BIM_ComputationalDesign =  document.querySelectorAll('input[name="BIM/ComputationalDesign"]');

const info_Programming = document.getElementById("info_Programming");
const info_Unity = document.getElementById("info_Unity");
const info_BIM_ComputationalDesign = document.getElementById("info_BIM_ComputationalDesign");

inputs_Programming.forEach(input =>{
    input.addEventListener('change',function(){
        switch(this.id){
            case 'Csharp_Beginnner':
                info_Programming.textContent="基本的な文法（データ型、条件分岐、ループなど）、オブジェクト指向の基礎（クラス、継承、ポリモーフィズム）を把握しています。リストや配列の操作、例外処理、ファイルの読み書き、Linqを使った簡単なクエリも行えます。Visual Studioでのデバッグ、API呼び出しなどの操作できます";
                break;
            case 'Csharp_Intermediate':
                info_Programming.textContent="非同期プログラミング、デリゲート、イベント、ラムダ式、インターフェースを理解し、設計パターンを使用した開発が可能ですが、実務経験が少ないため、LINQの高度な使い方、エラーハンドリング、単体テスト、自動化ツールの利用、gitなどのバージョン管理まだ習熟していません";
                break;
            case 'Advanced':
                info_Programming.textContent="アーキテクチャ設計、マルチスレッドや非同期処理の高度な管理、メモリ最適化に精通し、依存性注入やSOLID原則などの設計パターンなどの上位レベルに達していません";
                break;
            case 'html_css_js':
                info_Programming.textContent="基本的なHTMLタグの使用、CSSによるレイアウトとスタイル指定、JavaScriptでの簡単なDOM操作やイベント処理を理解しています。静的なウェブページを作成でき、基本的なインタラクティブ要素を実装できます。";
                break;
        }
    })
});

inputs_Unity.forEach(input =>{
    input.addEventListener('change',function(){
        switch(this.id){
            case 'Unity_API':
                info_Unity.textContent="GameObjectやTransformなどの基本クラスを理解し、オブジェクトの移動、回転、スケール操作を行えます。また、UpdateやStart関数の使い方、簡単な物理演算や衝突判定も扱えます。";
                break;
            case 'Unity_UI':
                info_Unity.textContent="UGUIのUIシステムでのCanvas、Button、Textなどの基本要素を使ってインターフェースを構築し、EventSystemを理解しています。また、スクリプトでUI要素の動的な操作やRectTransformによるレイアウト調整、アニメーションやScrollViewの実装が可能です。";
                break;
            case 'Unity_Animator':
                info_Unity.textContent="AnimatorとAnimationを使った基本的なアニメーション作成やAnimator Controllerでの遷移設定ができ、Blend Treeを利用した滑らかなモーションも扱えます。スクリプトでのアニメーション制御やAnimation Eventの活用も可能です。";
                break;
            case 'Unity_DataManager':
                info_Unity.textContent="ResourcesやAddressableを使って動的にアセットをロードでき、AssetBundleを利用した外部アセット管理にも対応可能です。StreamingAssetsやPersistentDataPathを使ったファイル保存や読み込みも理解しています。";
                break;
            case 'Unity_MemoryManager':
                info_Unity.textContent="GC（ガベージコレクション）やメモリリークの基本を理解し、Object Poolingでインスタンス再利用を最適化します。Profilerでメモリ使用状況を監視し、Assetの適切なロード・アンロードによるメモリ管理も実践できます。";
                break;
            case 'Unity_SeniorLevel':
                info_Unity.textContent="アーキテクチャ設計、DOTSやマルチスレッドによるパフォーマンス向上、カスタムシェーダーの開発、複雑な物理シミュレーション、ネットワーク同期処理などの上位レベルまだ達していません。";
                break;
        }
    })
});

inputs_BIM_ComputationalDesign
.forEach(input =>{
    input.addEventListener('change',function(){
        switch(this.id){
            case 'Revit_Rhino':
                info_BIM_ComputationalDesign.textContent="Revitではファミリの作成やパラメトリックデザイン、ビム（BIM）モデルの管理を行い、RhinoではNURBS曲線やサーフェスを使った複雑な形状のモデリングが可能です。さらに、Grasshopperを利用して両方のソフト間でデータ連携やプロセスの自動化も実践できます。";
                break;
            case 'Grasshopper':
                info_BIM_ComputationalDesign.textContent="複雑なパラメトリックデザインの構築が可能で、データツリー管理やカスタムコンポーネントを活用して効率的なモデリングを行います。";
                break;
            case 'Grasshopper_Developer':
                info_BIM_ComputationalDesign.textContent="さらに、C#のスクリプトと各分野（環境シミュレーション、ar,3dプリンターなど）を組み合わせて機能を拡張し、高度な自動化プロセスを実践できるプルグラムの作成を対応できます";
                break;
            case 'Bim_Developer':
                info_BIM_ComputationalDesign.textContent="C#，Revit SDKによるプラグインの実装、MVVMによるWPFのプラグイン配置は対応可能です";
                break;
        }
    })
});


//右部分の作品表示
const imgData_p1 = ["../assets/projectImages/project01/p1-01.png",
                    "../assets/projectImages/project01/p1-02.png",
                    "../assets/projectImages/project01/p1-03.png"];
                    
                    

function Skill_btn_Clicked(){
    let container_Portfolio = document.getElementById("container_Portfolio");

    if(getComputedStyle(container_Portfolio).getPropertyValue("flex-grow") === "1")
    {
       /* container_Portfolio.classList.toggle("hidden");*/
    }
    else{
        container_Portfolio.classList.toggle("hidden");
    }
}


function LoadPage(){
    
}

function LoadSubPage(pagePath){
    fetch(pagePath)
        .then(response => response.text())
        .then(html => {
                document.getElementById("container_Portfolio").innerHTML = html;
        })
        .catch(err => console.error("error loading the page:",err));
}