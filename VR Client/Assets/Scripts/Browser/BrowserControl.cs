using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class BrowserControl : MonoBehaviour
{
    public GameObject browserView;

    // Start is called before the first frame update
    void Start()
    {
        StartCoroutine(spawnBrowser());
    }

    // Update is called once per frame
    void Update()
    {
        
    }

    public IEnumerator spawnBrowser()
    {
        yield return new WaitForSeconds(10);
        Instantiate(browserView, browserView.transform.position, Quaternion.identity);
    }
}
