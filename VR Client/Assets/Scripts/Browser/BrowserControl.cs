using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class BrowserControl : MonoBehaviour
{

    // Start is called before the first frame update
    void Start()
    {

    }

    // Update is called once per frame
    void Update()
    {
        
    }

    public IEnumerator showBrowser()
    {
        yield return new WaitForSeconds(20);
        Debug.Log("browser open");
        GetComponent<Animator>().SetBool("Open", true);
    }
}
