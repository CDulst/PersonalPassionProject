using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class EnemySpawner : MonoBehaviour
{

    public List<GameObject> spawnPoints;
    public List<GameObject> movePoints;
    public List<GameObject> spawnObjects;
    public bool spawning = true;
    private GameObject chosenPoint;
    private GameObject chosenObject;
    public float spawnWait = 10f;
    

    public IEnumerator SpawnObject()
    {
        if (spawning)
        {
            yield return new WaitForSeconds(spawnWait);
            int randomPoint = Random.Range(0, 4);
            chosenPoint = spawnPoints[randomPoint];
            chosenObject = spawnObjects[Random.Range(0, 3)];
            GameObject spawnedObject = Instantiate(chosenObject, chosenPoint.transform.position, chosenPoint.transform.rotation);
            spawnedObject.GetComponent<Enemy>().movespot = movePoints[randomPoint];
            //SetSpawnedVariables
        }
        StartCoroutine(SpawnObject());
    }

  
    public void SetSpawning(bool set)
    {
        spawning = set;
    }


    // Start is called before the first frame update
    void Start()
    {
        StartCoroutine(SpawnObject());
    }
}
