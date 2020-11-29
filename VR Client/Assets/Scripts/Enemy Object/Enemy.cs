using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Enemy : MonoBehaviour
{
    public Material hitMaterial;
    public Material deathMaterial;
    public Material RegularMaterial;
    public AudioSource Audio;
    public AudioClip hitSound;
    public AudioClip deathSound;
    public AudioClip gameOverSound;
    private bool moving = true;
    public float health = 500;
    public float damage = 100;
    public float movespeed = 5f;
    public GameObject movespot;

    public void OnTriggerEnter(Collider other)
    {
        Debug.Log("Hit");
        if (other.gameObject.tag == "Bullet")
        {
            Debug.Log("Hit");
            Destroy(other.gameObject);
            StartCoroutine(HitMarker());
            LowerHealth();
        }
        else if (other.gameObject.tag == "Player")
        {
            Debug.Log("Hit");
            gameObject.GetComponent<MeshRenderer>().material = deathMaterial;
            Destroy(gameObject);
            //Death()

        }
    }

    public void DoneSpawning()
    {
        GetComponent<Animator>().SetBool("DoneSpawning", true);
    }

    IEnumerator HitMarker()
    {
        GetComponent<Animator>().SetBool("Hit", true);
        yield return new WaitForSeconds(0.2f);
        GetComponent<Animator>().SetBool("Hit", false);

    }

    void LowerHealth()
    {
        health -= damage;
        if (health <= 0)
        {
            GetComponent<Animator>().SetBool("Death", true);
            Audio.clip = deathSound;
            moving = false;
        }
        else
        {
            Audio.clip = hitSound;
        }
        Audio.Play();
    }

    void Death()
    {
        Destroy(gameObject);
    }

    // Start is called before the first frame update
    void Start()
    {
        gameObject.GetComponent<MeshRenderer>().material = RegularMaterial;
        Audio = GetComponent<AudioSource>();
    }

    // Update is called once per frame
    void Update()
    {
        if (moving)
        {
            transform.position = Vector3.MoveTowards(transform.position, movespot.transform.position, movespeed * Time.deltaTime);
        }
    }
}
