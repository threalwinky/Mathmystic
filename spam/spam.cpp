#include<bits/stdc++.h>
using namespace std;
int main(){
    freopen("spam.out", "w", stdout);
    vector<string> v{
        "hdtr1",
        "hdtr2",
        "hdtr4",
        "hdtr5",
        "hdtr6",
        "hdtr7",
        "hdtr8",
        "hdtr9",
        "hdtr10",
        "hdtr11",
        "hdtr12",
        "hdtr13",
        "hdtr14",
        "muclucta",

        "tr1tv",
        "tr3tv",
        "tr5tv",
        "tr7tv",
        "tr9tv",
        "tr11tv",
        "tr13tv",
        "tr15tv",
        "tr17tv",
        "tr19tv",
        "tr21tv",
        "tr23tv",
        "tr25tv",
        "tr27tv",
        "tr29tv",
        "tr31tv",
        "tr33tv",
        "tr35tv",
        "tr37tv",
        //"tr39tv",
        "tr41tv",

        "tr2ta",
        "tr4ta",
        "tr6ta",
        "tr8ta",
        "tr10ta",
        "tr12ta",
        "tr14ta",
        "tr16ta",
        "tr18ta",
        "tr20ta",
        "tr22ta",
        "tr24ta",
        "tr26ta",
        "tr28ta",
        "tr30ta",
        "tr32ta",
        "tr34ta",
        "tr36ta",
        "tr38ta",
        //"tr40ta",
        "tr42ta",
    };
    for (auto it : v){
        // cout << "import " << it << " from " << "'../../../assets/audio/"<< it << ".mp3'";

        // cout << "{" << "\n";
        // cout << "   src : " << it << ",\n";
        // cout << "   pr : " << "'" << it << "'" << ",\n";
        // cout <<"    title : " << "'n'" << "\n";
        // cout << "}," << "\n";

        cout << "<option value='" << it <<  "'>" << it << "</option>";
        cout << "\n";
    }
}