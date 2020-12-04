using System.Collections;
using System.Collections.Generic;
using UnityEngine;


public class GrabDetection : MonoBehaviour {
    public OVRGrabber leftGrabber;
    public OVRGrabber rightGrabber;
    public SimpleShoot shooter;
    public OVRGrabbable gun;
    public OVRInput.Button shootingButtonL;
    public OVRInput.Button shootingButtonR;
    public AudioSource audioG;
    public GameObject worldMusic;
    public GameObject spawner;
    public bool gameStarted;
    public bool audioPlayedR;
    public bool audioPlayedL;
    public bool left;
    public bool right;
    // Start is called before the first frame update
 

    // Update is called once per frame
    void Update()
    {
        if (gun.grabbedBy == leftGrabber)
        {
            if (!gameStarted)
            {
                gameStarted = true;
                spawner.GetComponent<EnemySpawner>().spawning = true;
                worldMusic.GetComponent<AudioSource>().Play();
            }
            audioPlayedR = false;
            if (!audioPlayedL)
            {
                audioG.Play();
                audioPlayedL = true;
            }
            left = true;
            right = false;
        }
        else if (gun.grabbedBy == rightGrabber)
        {
            if (!gameStarted)
            {
                gameStarted = true;
                spawner.GetComponent<EnemySpawner>().spawning = true;
                worldMusic.GetComponent<AudioSource>().Play();
            }
            audioPlayedL = false;
            if (!audioPlayedR)
            {
                audioG.Play();
                audioPlayedR = true;
            }
            right = true;
            left = false;
        }
        if (right)
        {
            if (OVRInput.GetDown(shootingButtonR))
            {
                shooter.Shoot();
            }
        }
        else if (left)
        {
            if (OVRInput.GetDown(shootingButtonL))
            {
                shooter.Shoot();
            }
        }
    }

    private void Start()
    {
        audioG = GetComponent<AudioSource>();
    }
}
